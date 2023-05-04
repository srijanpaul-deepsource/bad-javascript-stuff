const _ = require('lodash')

// this should *not* raise JS-0125 (no-undefined-var)
export default new Accelerometer();

export const three = _.add(1, 2)
export const prom = new Promise(() => { /* stuff */ })

