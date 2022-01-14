// JS-0293
let a: Array<number> = [];


// JS-0298
class Mx {
    public static get foo() {
        return 1;
    }
}

// JS-0301
type T = { x: number; };



// JS-0316
new Array(0, 1, 2);

// JS-0324
function foo(bar?: { n: number }) {
    return (bar)!?.n;
}

// JS-0331
class Foo {
    a: number = 5;
    b: boolean = true;
    c: string = 'foo';
}

// JS-0364
declare module foo {
    declare module bar {}
}



