const ob = {
  set key(value) {
    this._key = value;
    return null;
  },

  get key() {
    return this._key
  }
}

export default ob

