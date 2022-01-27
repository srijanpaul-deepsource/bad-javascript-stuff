import path from "path";
import fs from "fs";

const unused_variable = 123;

class Foo {
  constructor(x) {
    this.x = x;
  }
}

path.join("a", "b");
fs.readFile("xx");

// unused object
new Foo(10);

function foo() {
  "use strict";
  return false;
}


let foo = 1
console.log(foo)
