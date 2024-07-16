import setIn from "set-in"

setIn({ 'a': { 'b': 'c' }}, [['__proto__']], { a: 'x' })
