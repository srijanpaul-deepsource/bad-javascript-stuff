// comment
// another comment
const oo = {
  set key(value) {
    this._key = value;
    return 123;
  },

  get key() {
    return this._key
  }
}

const prom = new Promise(function (resolve, reject) {
  reject("oops")
})

export { oo, prom }

