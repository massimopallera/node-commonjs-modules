const hobbies = require('./hobbies.js')
const name = require('./names.js')


function returnObject(){

  const personName = name.getFullName("Massimo", "Pallera")
  const hobbiesArr = hobbies.getHobbiesArr("Coding","Scacchi","Videogames")
  // console.log(personName)


  const person = {
    name : personName.firstName,
    lastName : personName.lastName,
    hobbiesArr
  }

  return person
}

console.log(returnObject())

