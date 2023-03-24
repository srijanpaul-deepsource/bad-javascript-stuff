//
// dev test file for marvin-javascript
import express from 'express'
import errorhandler from 'errorhandler'

const app = express()

// This will enable the error handler in both
// and production
app.use(errorhandler())

const dialogue = `"Journey before destination", said Dalinar.`
const dialogue2 = `What is a 'Kwisatz Haderach'?`

const dataStore = {
  _data: null,
  set data(value) {
    if (this.isValid(value)) {
      this._data = value
      return true
    }

    // We're returning false to indicate that
    // the `set` was unsuccessful, but this
    // return value will *never* be usable.
    return false
  }
}

export default { dialogue, dialogue2, dataStore }

