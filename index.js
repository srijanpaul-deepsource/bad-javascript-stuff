for (let i = 0; i <= array.length; ++i) {
  use(array[i]) // <- array[i] may be undefined
}

console.assert(1 === 2);
console.log(1 === 2);

export class Something {
  shouldBeStatic() {
    // doesn't use [this]
    return 123;
  }
}

function main() {
  return 0
}

function App() {
  return 1;
}

main(); App();
