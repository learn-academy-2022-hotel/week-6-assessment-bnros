// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// PSEUDOCODE:
// input: an array of objects
// output: a new array with a sentence about each person and their name capitlized

//  process:
// declare a function called "descPeople"
// after declaring function, give it the paramater of "people" as an argument to take in an array of objects
// create a return statement with using the .map method on the "people" array so that it will return a new array with the specifications we will give it
// within the map statement, declare a variable called "fullName" and using the .split method, have it split into two seperate strings wuth a space in a space inside
// declare two variable inside called "capFirstName" and "capLastName" to account for the two strings we have from using the .string method
// in both of these new variables, call on the "fullName" variable and using bracket notation of [0][0] and [1][0], respectively. the first number which is 0, will access the first element in the name array, the second number which is 0, will then access the first character of that first element. the same will apply with the other variable.
// use the .toUpperCase method following the bracket notation to have those letters accessed via bracket notation to capitlize
// concat, then use the .slice method to extract all characters of the first and last name, except for the first one
// using string interpolation, create a return statement to make your test pass

// a) Create a test with an expect statement using the variable provided.

// RED:
describe("descPeople", () => {
  it("takes an object and makes a sentence about them with their name capitlized", () => {
    expect(descPeople(people)).toEqual([
      "Ford Prefect is a hitchhiker.", 
      "Zaphod Beeblebrox is president of the galaxy.", 
      "Arthur Dent is a radio employee."
    ])
  })
}) 

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

//GREEN:

// const descPeople = (persons) => {
//   return persons.map(person => {
//     const capName = person.name.charAt(0).toUpperCase() + person.name.slice(1)
//     return `${capName} is ${person.occupation}.`
//   })
// }

// ^Did not work, would only capitilize the first character of the first name in the array.

// expect(received).toEqual(expected) // deep equality

//     - Expected  - 3
//     + Received  + 3

//       Array [
//     -   "Ford Prefect is a hitchhiker.",
//     -   "Zaphod Beeblebrox is president of the galaxy.",
//     -   "Arthur Dent is a radio employee.",
//     +   "Ford prefect is a hitchhiker.",
//     +   "Zaphod beeblebrox is president of the galaxy.",
//     +   "Arthur dent is a radio employee.",

// const descPeople = (persons) => {
//   return persons.map(person => { 
//     const name = person.name.split(" ")
//     const capFirstName = person.capFirstName[0].toUpperCase() + person.capFirstName.slice(1)
//     const capLastName = person.capLastName[0].toUpperCase() + person.capLastName.slice(1)
//     return `${capFirstName} ${capLastName} is ${person.occupation}.`
//   })
// }

// ^Also did not work

const descPeople = (people)=> {
  return people.map(person => {
    let fullName = person.name.split(" ")
    let capFirstName = fullName[0][0].toUpperCase() + fullName[0].slice(1)
    let capLastName = fullName[1][0].toUpperCase() + fullName[1].slice(1)
    return `${capFirstName} ${capLastName} is ${person.occupation}.`
  })
}

// this one was really tough, referred to these resources for help:
// https://javascript.plainenglish.io/javascript-capitalize-first-letter-of-each-word-in-array-79635ce43aac
// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// PSEUDOCODE:
// input: an array of mixed data
// output: array of remainders of numbers when divided by three

// process:
// declare a fxn called "divByThree"
// after declaring fxn, pass it the paramater of array
// within the new fxn, create a return statement to return our parameter first using the .filter method to create a new array containing only the specifications we give it, in this case, numbers
// create a callback fxn to check if each value in the array is a number by using typeof and strictly setting it to the data type of "numbers"
// use the .map method to take a callback function that creates an array from the results of the og array and give it a parameter called "num"
// create a return statement, using the modulo that takes number and divides it by three

// a) Create a test with an expect statement using the variables provided.

// RED:
describe("divByThree", () => {
  it("returns only remainder of numbers divided by three", () => {
    expect(divByThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divByThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

const divByThree = (array) => {
  return array.filter(function(value) {
    return typeof value === 'number'
      }).map(function(num) {
    return num % 3
  })
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// pseudocode:
// input: an array of numbers
// output an array of said numbers, cubed

// process:
// start by declaring a function called "cubedNum"
// after declaring the fxn, give it the paramater of "numsArray"
// within the function, create a new variable called "cubedSum" and set to 0, this will be used to track the sum of numbers after it has been cubed in our array
// create a for loop to iterate and cycle through each number in the array - have it to start at 0, then use the .length method to continue through the length of the array
// in the loop, have the cubedSum add to the cubed number by using Math.pow
// create a return statement for "cubedSum"

// a) Create a test with an expect statement using the variables provided.

// RED:
describe("cubedNum", () => {
  it("cubes all the numbers and adds the total sum", () => {
    expect(cubedNum(cubeAndSum1)).toEqual(99)
    expect(cubedNum(cubeAndSum2)).toEqual(1125)
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// GREEN:

const cubedNum = (numArray) => {
  let cubedSum = 0
  for (let i = 0; i < numArray.length; i++) {
    cubedSum += Math.pow(numArray[i], 3)
  }
  return cubedSum
}
