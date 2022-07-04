/* eslint-disable @typescript-eslint/no-unused-vars */

// TypeScriptの基本の型

let bool: boolean = true;

let number: number = 0;

let str: string = "A";

// 配列の型の指定は以下の2つの方法があり、どちらでもよい。
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

let tuple: [number, string] = [0, "A"];  // tuple型

let any1: any = false;  // any型は、どんな方でも指定できるので、型の指定の意味がない。よってあまり使わないようにすべき。

// void型は、何も返さない場合の型。但し、この関数を見れば何も返していないことが分かるので、typeScriptでは、この場合void型を指定しなくても自動的にvoid型を推測してくれる。
const funcA = (): void => {
  const test = "TEST";
}

let null1: null = null;

let undefined1: undefined = undefined;

let obj1: object = {};
let obj2: { id: number, name: string } = {id: 0, name: "AAA"};

