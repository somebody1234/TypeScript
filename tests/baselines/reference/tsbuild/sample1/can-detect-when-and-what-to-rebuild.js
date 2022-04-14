Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/core/anotherModule.d.ts]


//// [/src/core/anotherModule.d.ts.map]


//// [/src/core/anotherModule.js]


//// [/src/core/anotherModule.ts]
export const World = "hello";


//// [/src/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;
//# sourceMappingURL=index.d.ts.map

//// [/src/core/index.d.ts.map]


//// [/src/core/index.js]


//// [/src/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }


//// [/src/core/some_decl.d.ts]
declare const dts: any;


//// [/src/core/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "declarationMap": true,
        "skipDefaultLibCheck": true
    }
}

//// [/src/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./anothermodule.ts","./index.ts","./some_decl.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-2676574883-export const World = \"hello\";\r\n","signature":"-8396256275-export declare const World = \"hello\";\r\n"},{"version":"-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n","signature":"1874987148-export declare const someString: string;\r\nexport declare function leftPad(s: string, n: number): string;\r\nexport declare function multiply(a: number, b: number): number;\r\n"},{"version":"-9253692965-declare const dts: any;\r\n","affectsGlobalScope":true}],"options":{"composite":true,"declaration":true,"declarationMap":true,"skipDefaultLibCheck":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4]},"version":"FakeTSVersion"}

//// [/src/logic/index.d.ts]


//// [/src/logic/index.js]


//// [/src/logic/index.js.map]


//// [/src/logic/index.ts]


//// [/src/logic/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "sourceMap": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    },
    "references": [
        { "path": "../core" }
    ]
}


//// [/src/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-13851440507-export declare const someString: string;\r\nexport declare function leftPad(s: string, n: number): string;\r\nexport declare function multiply(a: number, b: number): number;\r\n//# sourceMappingURL=index.d.ts.map","7652028357-export declare const World = \"hello\";\r\n//# sourceMappingURL=anotherModule.d.ts.map",{"version":"-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n","signature":"-6548680073-export declare function getSecondsInDay(): number;\r\nimport * as mod from '../core/anotherModule';\r\nexport declare const m: typeof mod;\r\n"}],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3],[3]],"referencedMap":[[4,1]],"exportedModulesMap":[[4,2]],"semanticDiagnosticsPerFile":[1,3,2,4]},"version":"FakeTSVersion"}

//// [/src/tests/index.d.ts]
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/src/tests/index.js]


//// [/src/tests/index.ts]


//// [/src/tests/tsconfig.json]
{
    "references": [
        { "path": "../core" },
        { "path": "../logic" }
    ],
    "files": ["index.ts"],
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    }
}

//// [/src/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-13851440507-export declare const someString: string;\r\nexport declare function leftPad(s: string, n: number): string;\r\nexport declare function multiply(a: number, b: number): number;\r\n//# sourceMappingURL=index.d.ts.map","7652028357-export declare const World = \"hello\";\r\n//# sourceMappingURL=anotherModule.d.ts.map","-6548680073-export declare function getSecondsInDay(): number;\r\nimport * as mod from '../core/anotherModule';\r\nexport declare const m: typeof mod;\r\n",{"version":"12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n","signature":"-9209611-import * as mod from '../core/anotherModule';\r\nexport declare const m: typeof mod;\r\n"}],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"fileIdsList":[[3],[2,3,4]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[[4,1],[5,1]],"semanticDiagnosticsPerFile":[1,3,2,4,5]},"version":"FakeTSVersion"}

//// [/src/ui/index.ts]


//// [/src/ui/tsconfig.json]




Output::
/lib/tsc --b /src/tests --verbose
[[90m12:01:00 AM[0m] Projects in this build: 
    * src/core/tsconfig.json
    * src/logic/tsconfig.json
    * src/tests/tsconfig.json

[[90m12:01:00 AM[0m] Project 'src/core/tsconfig.json' is up to date because newest input 'src/core/anotherModule.ts' is older than oldest output 'src/core/anotherModule.js'

[[90m12:01:00 AM[0m] Project 'src/logic/tsconfig.json' is up to date because newest input 'src/logic/index.ts' is older than oldest output 'src/logic/index.js'

[[90m12:01:00 AM[0m] Project 'src/tests/tsconfig.json' is up to date because newest input 'src/tests/index.ts' is older than oldest output 'src/tests/index.js'

exitCode:: ExitStatus.Success

getModifiedTime:: {
 "/src/core/anotherModule.ts": 1,
 "/src/core/index.ts": 1,
 "/src/core/some_decl.d.ts": 1,
 "/src/core/anotherModule.js": 1,
 "/src/core/anotherModule.d.ts": 2,
 "/src/core/anotherModule.d.ts.map": 1,
 "/src/core/index.js": 1,
 "/src/core/index.d.ts": 2,
 "/src/core/index.d.ts.map": 1,
 "/src/core/tsconfig.tsbuildinfo": 1,
 "/src/core/tsconfig.json": 1,
 "/src/logic/index.ts": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 2,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/logic/tsconfig.json": 1,
 "/src/tests/index.ts": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 2,
 "/src/tests/tsconfig.tsbuildinfo": 1,
 "/src/tests/tsconfig.json": 1
}

setModifiedTime:: {}

fileExists:: {
 "/src/core/anotherModule.ts": 1,
 "/src/core/index.ts": 1,
 "/src/core/some_decl.d.ts": 1,
 "/src/core/anotherModule.js": 1,
 "/src/core/anotherModule.d.ts": 1,
 "/src/core/anotherModule.d.ts.map": 1,
 "/src/core/index.js": 1,
 "/src/core/index.d.ts": 1,
 "/src/core/index.d.ts.map": 1,
 "/src/core/tsconfig.tsbuildinfo": 1,
 "/src/logic/index.ts": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 1,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/tests/index.ts": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 1,
 "/src/tests/tsconfig.tsbuildinfo": 1
}

directoryExists:: {}




Change:: Only builds the leaf node project
Input::
//// [/src/tests/index.ts]
const m = 10;



Output::
/lib/tsc --b /src/tests --verbose
[[90m12:04:00 AM[0m] Projects in this build: 
    * src/core/tsconfig.json
    * src/logic/tsconfig.json
    * src/tests/tsconfig.json

[[90m12:04:00 AM[0m] Project 'src/core/tsconfig.json' is up to date because newest input 'src/core/anotherModule.ts' is older than oldest output 'src/core/anotherModule.js'

[[90m12:04:00 AM[0m] Project 'src/logic/tsconfig.json' is up to date because newest input 'src/logic/index.ts' is older than oldest output 'src/logic/index.js'

[[90m12:04:00 AM[0m] Project 'src/tests/tsconfig.json' is out of date because oldest output 'src/tests/index.js' is older than newest input 'src/tests/index.ts'

[[90m12:04:00 AM[0m] Building project '/src/tests/tsconfig.json'...

exitCode:: ExitStatus.Success

getModifiedTime:: {
 "/src/core/anotherModule.ts": 1,
 "/src/core/index.ts": 1,
 "/src/core/some_decl.d.ts": 1,
 "/src/core/anotherModule.js": 1,
 "/src/core/anotherModule.d.ts": 2,
 "/src/core/anotherModule.d.ts.map": 1,
 "/src/core/index.js": 1,
 "/src/core/index.d.ts": 2,
 "/src/core/index.d.ts.map": 1,
 "/src/core/tsconfig.tsbuildinfo": 1,
 "/src/core/tsconfig.json": 1,
 "/src/logic/index.ts": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 2,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/logic/tsconfig.json": 1,
 "/src/tests/index.ts": 1,
 "/src/tests/index.js": 1
}

setModifiedTime:: {}

fileExists:: {
 "/src/core/anotherModule.ts": 1,
 "/src/core/index.ts": 1,
 "/src/core/some_decl.d.ts": 1,
 "/src/core/anotherModule.js": 1,
 "/src/core/anotherModule.d.ts": 1,
 "/src/core/anotherModule.d.ts.map": 1,
 "/src/core/index.js": 1,
 "/src/core/index.d.ts": 1,
 "/src/core/index.d.ts.map": 1,
 "/src/core/tsconfig.tsbuildinfo": 1,
 "/src/logic/index.ts": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 1,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/tests/index.ts": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 1
}

directoryExists:: {
 "/src/tests/node_modules/@types": 1,
 "/src/node_modules/@types": 1,
 "/node_modules/@types": 1
}


//// [/src/tests/index.d.ts]
declare const m = 10;


//// [/src/tests/index.js]
var m = 10;


//// [/src/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"3708260210-const m = 10;","signature":"1073907769-declare const m = 10;\r\n","affectsGlobalScope":true}],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/src/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "version": "3708260210-const m = 10;",
        "signature": "1073907769-declare const m = 10;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 849
}



Change:: Detects type-only changes in upstream projects
Input::
//// [/src/core/index.ts]
export const someString: string = "WELCOME PLANET";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }




Output::
/lib/tsc --b /src/tests --verbose
[[90m12:07:00 AM[0m] Projects in this build: 
    * src/core/tsconfig.json
    * src/logic/tsconfig.json
    * src/tests/tsconfig.json

[[90m12:07:00 AM[0m] Project 'src/core/tsconfig.json' is out of date because oldest output 'src/core/anotherModule.js' is older than newest input 'src/core/index.ts'

[[90m12:07:00 AM[0m] Building project '/src/core/tsconfig.json'...

[[90m12:07:00 AM[0m] Updating unchanged output timestamps of project '/src/core/tsconfig.json'...

[[90m12:07:00 AM[0m] Project 'src/logic/tsconfig.json' is up to date with .d.ts files from its dependencies

[[90m12:07:00 AM[0m] Updating output timestamps of project '/src/logic/tsconfig.json'...

[[90m12:07:00 AM[0m] Project 'src/tests/tsconfig.json' is up to date with .d.ts files from its dependencies

[[90m12:07:00 AM[0m] Updating output timestamps of project '/src/tests/tsconfig.json'...

exitCode:: ExitStatus.Success

getModifiedTime:: {
 "/src/core/anotherModule.ts": 1,
 "/src/core/index.ts": 1,
 "/src/core/some_decl.d.ts": 1,
 "/src/core/anotherModule.js": 1,
 "/src/core/index.d.ts": 1,
 "/src/core/anotherModule.d.ts": 1,
 "/src/logic/index.ts": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 3,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/logic/tsconfig.json": 1,
 "/src/tests/index.ts": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 3,
 "/src/tests/tsconfig.tsbuildinfo": 1,
 "/src/tests/tsconfig.json": 1
}

setModifiedTime:: {
 "/src/core/anotherModule.js": 1,
 "/src/core/anotherModule.d.ts": 1,
 "/src/core/anotherModule.d.ts.map": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 1,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 1,
 "/src/tests/tsconfig.tsbuildinfo": 1
}

fileExists:: {
 "/src/core/anotherModule.ts": 1,
 "/src/core/index.ts": 1,
 "/src/core/some_decl.d.ts": 1,
 "/src/core/anotherModule.js": 1,
 "/src/core/index.d.ts": 1,
 "/src/logic/index.ts": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 1,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/tests/index.ts": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 1,
 "/src/tests/tsconfig.tsbuildinfo": 1
}

directoryExists:: {
 "/src/core/node_modules/@types": 1,
 "/src/node_modules/@types": 1,
 "/node_modules/@types": 1
}


//// [/src/core/index.d.ts] file written with same contents
//// [/src/core/index.d.ts.map]
{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,UAAU,EAAE,MAAyB,CAAC;AACnD,wBAAgB,OAAO,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB;AAC/D,wBAAgB,QAAQ,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB"}

//// [/src/core/index.js]
"use strict";
exports.__esModule = true;
exports.multiply = exports.leftPad = exports.someString = void 0;
exports.someString = "WELCOME PLANET";
function leftPad(s, n) { return s + n; }
exports.leftPad = leftPad;
function multiply(a, b) { return a * b; }
exports.multiply = multiply;


//// [/src/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./anothermodule.ts","./index.ts","./some_decl.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-2676574883-export const World = \"hello\";\r\n","signature":"-8396256275-export declare const World = \"hello\";\r\n"},{"version":"-2157245566-export const someString: string = \"WELCOME PLANET\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n","signature":"1874987148-export declare const someString: string;\r\nexport declare function leftPad(s: string, n: number): string;\r\nexport declare function multiply(a: number, b: number): number;\r\n"},{"version":"-9253692965-declare const dts: any;\r\n","affectsGlobalScope":true}],"options":{"composite":true,"declaration":true,"declarationMap":true,"skipDefaultLibCheck":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4]},"version":"FakeTSVersion"}

//// [/src/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./anothermodule.ts": {
        "version": "-2676574883-export const World = \"hello\";\r\n",
        "signature": "-8396256275-export declare const World = \"hello\";\r\n"
      },
      "./index.ts": {
        "version": "-2157245566-export const someString: string = \"WELCOME PLANET\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
        "signature": "1874987148-export declare const someString: string;\r\nexport declare function leftPad(s: string, n: number): string;\r\nexport declare function multiply(a: number, b: number): number;\r\n"
      },
      "./some_decl.d.ts": {
        "version": "-9253692965-declare const dts: any;\r\n",
        "signature": "-9253692965-declare const dts: any;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./some_decl.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1433
}

//// [/src/logic/tsconfig.tsbuildinfo] file changed its modified time
//// [/src/tests/index.d.ts] file changed its modified time
//// [/src/tests/tsconfig.tsbuildinfo] file changed its modified time


Change:: rebuilds when tsconfig changes
Input::
//// [/src/tests/tsconfig.json]
{
    "references": [
        { "path": "../core" },
        { "path": "../logic" }
    ],
    "files": ["index.ts"],
    "compilerOptions": {
        "composite": true, "target": "es3",
        "declaration": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    }
}



Output::
/lib/tsc --b /src/tests --verbose
[[90m12:10:00 AM[0m] Projects in this build: 
    * src/core/tsconfig.json
    * src/logic/tsconfig.json
    * src/tests/tsconfig.json

[[90m12:10:00 AM[0m] Project 'src/core/tsconfig.json' is up to date because newest input 'src/core/index.ts' is older than oldest output 'src/core/anotherModule.js'

[[90m12:10:00 AM[0m] Project 'src/logic/tsconfig.json' is up to date because newest input 'src/logic/index.ts' is older than oldest output 'src/logic/index.js'

[[90m12:10:00 AM[0m] Project 'src/tests/tsconfig.json' is out of date because oldest output 'src/tests/index.js' is older than newest input 'src/tests/tsconfig.json'

[[90m12:10:00 AM[0m] Building project '/src/tests/tsconfig.json'...

exitCode:: ExitStatus.Success

getModifiedTime:: {
 "/src/core/anotherModule.ts": 1,
 "/src/core/index.ts": 1,
 "/src/core/some_decl.d.ts": 1,
 "/src/core/anotherModule.js": 1,
 "/src/core/anotherModule.d.ts": 2,
 "/src/core/anotherModule.d.ts.map": 1,
 "/src/core/index.js": 1,
 "/src/core/index.d.ts": 2,
 "/src/core/index.d.ts.map": 1,
 "/src/core/tsconfig.tsbuildinfo": 1,
 "/src/core/tsconfig.json": 1,
 "/src/logic/index.ts": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 2,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/logic/tsconfig.json": 1,
 "/src/tests/index.ts": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 3,
 "/src/tests/tsconfig.tsbuildinfo": 1,
 "/src/tests/tsconfig.json": 1
}

setModifiedTime:: {}

fileExists:: {
 "/src/core/anotherModule.ts": 1,
 "/src/core/index.ts": 1,
 "/src/core/some_decl.d.ts": 1,
 "/src/core/anotherModule.js": 1,
 "/src/core/anotherModule.d.ts": 1,
 "/src/core/anotherModule.d.ts.map": 1,
 "/src/core/index.js": 1,
 "/src/core/index.d.ts": 1,
 "/src/core/index.d.ts.map": 1,
 "/src/core/tsconfig.tsbuildinfo": 1,
 "/src/logic/index.ts": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 1,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/tests/index.ts": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 1,
 "/src/tests/tsconfig.tsbuildinfo": 1
}

directoryExists:: {
 "/src/tests/node_modules/@types": 1,
 "/src/node_modules/@types": 1,
 "/node_modules/@types": 1
}


//// [/src/tests/index.d.ts] file written with same contents
//// [/src/tests/index.js] file written with same contents
//// [/src/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"3708260210-const m = 10;","signature":"1073907769-declare const m = 10;\r\n","affectsGlobalScope":true}],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"target":0},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/src/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "version": "3708260210-const m = 10;",
        "signature": "1073907769-declare const m = 10;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "target": 0
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 860
}

