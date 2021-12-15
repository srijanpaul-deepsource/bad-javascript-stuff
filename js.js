const unused_variable = 123

class Foo {
    constructor(x) {
        this.x = x
    }
}

// unused object
new Foo(10)

function foo() {
    "use strict";
    return false;
}

const always_false = foo()
const very_bad_variable = ">:D"