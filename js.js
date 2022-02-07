const x = require('node-serialize')

x.unserialize("fooo");
x.serialize({x: 1})
x.serialize({ y : 1 })

const test = false;

const test = true


function someFunction (notUsedParameter) {
  return nonExistantVariable + 5 + 'cat' 
}

const anotherKindOfFunction = () => {
  while (true) {
    spamNonExistantFunction();
  }
}


const badFunction = () => {
  while (true) {
    spamNonExistantFunction();
  }
}


let fruits = ['Apple', 'Banana', 'Cherry', 'Mango']
function getFruit(index) {
  index = index || 3 // Everybody likes mangoes
  return fruits[index]
}


let x = "";
