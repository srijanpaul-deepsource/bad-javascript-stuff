for (let i = 0; i <= array.length; ++i) {
  use(array[i]) // <- array[i] may be undefined
}

console.assert(1 === 2);
console.log(1 === 2);
