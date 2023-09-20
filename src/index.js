export default 1 && 2
export const or = 1 || 2
export const something = or || "default"

// doc comment
function myFunc(a, b, c) {
  return a + b + c;
}

// fake doc comment
export function myOtherFunc(cond) {
  if (cond) {
    throw new Error("some error");
    cond += 1;
    return true;
  }
  return false;
}

export const myExport = myFunc(12, 13, undefined);
export const myExport2 = myFunc(1 + 3, undefined, undefined);
export const myExport3 = myFunc(1 + 1, undefined, 3 + 1);
export const myExport35 = myFunc(1 * 1, undefined, 3 + 1);
export const myExport4 = myFunc((() => {
  return 123;
})(), undefined, 3 + 1);

function pleaseAnalyzeMe_IHaveNoDocComment() {
  const unusedVariable = 123;
  new Promise();
}

if (or == null) {
  // empty cause reasons
}

// fake doc comment.
export function someOtherFunc(cond) {
  if (cond) {
    cond();
    return;
  } else {
    console.log("no bueno") // <- not good
    return
  }
}

if (or == null) {
  // foo
}

if (or == and) {
  // foo
}

const foo = $(".foo")
foo.innerText = "hi, dad"

foo && or && someOtherFunc(true)

// my doc comment
function complexFunction(input) {
  let result = 0
  if (input % 2 === 0) {
    result += 1
  } else {
    result += 2
    if (input > 10) {
      result += 3
      if (input < 100) {
        result += 4
      } else {
        for (let i = 0; i < input; i++) {
          result += 5
        }
      }
    } else {
      for (let i = 0; i < input; i++) {
        result += 6
        while (result < 1000) {
          result += 7
        }
      }
    }
  }
  switch (input) {
    case 1:
      result += 8
      break
    case 2:
      result += 9
      break
    case 3:
      result += 10
      break
    case 4:
      result += 11
      break
    default:
      result += 12
      break
  }
  for (let i = 0; i < input; i++) {
    result += 13
    if (result % 2 === 0) {
      result += 14
    }
  }
  return result
}
