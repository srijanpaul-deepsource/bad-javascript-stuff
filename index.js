// comment
// another comment
const oo = {
  set key(value) {
    this._key = value;
    return null;
  },

  get key() {
    return this._key
  }
}

export default oo

