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

const always_false = foo();
const very_bad_variable = ">:D";
let non_const_and_unused = 'x'