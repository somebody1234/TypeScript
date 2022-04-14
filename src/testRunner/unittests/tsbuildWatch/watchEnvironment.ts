namespace ts.tscWatch {
    describe("unittests:: tsbuildWatch:: watchEnvironment:: tsbuild:: watchMode:: with different watch environments", () => {
        describe("when watchFile can create multiple watchers per file", () => {
            verifyWatchFileOnMultipleProjects(/*singleWatchPerFile*/ false);
        });

        describe("when watchFile is single watcher per file", () => {
            verifyWatchFileOnMultipleProjects(
                /*singleWatchPerFile*/ true,
                arrayToMap(["TSC_WATCHFILE"], identity, () => TestFSWithWatch.Tsc_WatchFile.SingleFileWatcherPerName)
            );
        });

        function verifyWatchFileOnMultipleProjects(singleWatchPerFile: boolean, environmentVariables?: ESMap<string, string>) {
            it("watchFile on same file multiple times because file is part of multiple projects", () => {
                const project = `${TestFSWithWatch.tsbuildProjectsLocation}/myproject`;
                let maxPkgs = 4;
                const configPath = `${project}/tsconfig.json`;
                const typing: File = {
                    path: `${project}/typings/xterm.d.ts`,
                    content: "export const typing = 10;"
                };

                const allPkgFiles = pkgs(pkgFiles);
                const system = createWatchedSystem([libFile, typing, ...flatArray(allPkgFiles)], { currentDirectory: project, environmentVariables });
                writePkgReferences(system);
                const { sys, baseline, oldSnap, cb, getPrograms } = createBaseline(system);
                const host = createSolutionBuilderWithWatchHostForBaseline(sys, cb);
                const solutionBuilder = createSolutionBuilderWithWatch(host, ["tsconfig.json"], { watch: true, verbose: true });
                solutionBuilder.build();
                // TODO: (shkamat): Need different test where we check single watch per file
                runWatchBaseline({
                    scenario: "watchEnvironment",
                    subScenario: `same file in multiple projects${singleWatchPerFile ? " with single watcher per file" : ""}`,
                    commandLineArgs: ["--b", "--w"],
                    sys,
                    baseline,
                    oldSnap,
                    getPrograms,
                    changes: [
                        {
                            caption: "modify typing file",
                            change: sys => sys.writeFile(typing.path, `${typing.content}export const typing1 = 10;`),
                            timeouts: sys => pkgs(() => sys.checkTimeoutQueueLengthAndRun(1))
                        },
                        {
                            // Make change
                            caption: "change pkg references",
                            change: sys => {
                                maxPkgs--;
                                writePkgReferences(sys);
                            },
                            timeouts: checkSingleTimeoutQueueLengthAndRun,
                        },
                        {
                            caption: "modify typing file",
                            change: sys => sys.writeFile(typing.path, typing.content),
                            timeouts: sys => pkgs(() => sys.checkTimeoutQueueLengthAndRun(1))
                        },
                        {
                            // Make change to remove all watches
                            caption: "change pkg references to remove all watches",
                            change: sys => {
                                maxPkgs = 0;
                                writePkgReferences(sys);
                            },
                            timeouts: checkSingleTimeoutQueueLengthAndRun,
                        },
                        {
                            caption: "modify typing file",
                            change: sys => sys.writeFile(typing.path, `${typing.content}export const typing1 = 10;`),
                            timeouts: sys => pkgs(() => sys.checkTimeoutQueueLengthAndRun(1))
                        },
                    ],
                    watchOrSolution: solutionBuilder
                });

                function flatArray<T>(arr: T[][]): readonly T[] {
                    return flatMap(arr, identity);
                }
                function pkgs<T>(cb: (index: number) => T): T[] {
                    const result: T[] = [];
                    for (let index = 0; index < maxPkgs; index++) {
                        result.push(cb(index));
                    }
                    return result;
                }
                function createPkgReference(index: number) {
                    return { path: `./pkg${index}` };
                }
                function pkgFiles(index: number): File[] {
                    return [
                        {
                            path: `${project}/pkg${index}/index.ts`,
                            content: `export const pkg${index} = ${index};`
                        },
                        {
                            path: `${project}/pkg${index}/tsconfig.json`,
                            content: JSON.stringify({
                                complerOptions: { composite: true },
                                include: [
                                    "**/*.ts",
                                    "../typings/xterm.d.ts"
                                ]
                            })
                        }
                    ];
                }
                function writePkgReferences(system: TestFSWithWatch.TestServerHost) {
                    system.writeFile(configPath, JSON.stringify({
                        files: [],
                        include: [],
                        references: pkgs(createPkgReference)
                    }));
                }
            });
        }
    });
}
