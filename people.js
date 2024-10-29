const hobbies = require('./hobbies.js')
const name = require('./names.js')

function returnObject(){

  const person = {
    name : name.firstName,
    lastName : name.lastName,
    hobbies
  }

  return person
}

console.log(returnObject())

