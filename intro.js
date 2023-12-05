console.log("intro.js is running")

// Assign the required thing to a variable
let arrayOfPeople = require('./people.js')
let fungusCollection = require('./myFunGuy.js')
let libraryBooks = require('./myLibrary.js')

console.log("My Array of People:", arrayOfPeople)
console.log("My Fungus Collection", fungusCollection("🥔"))
console.log("My Library:", libraryBooks)
console.log("Checking out:", libraryBooks.checkout("Harry Potter"))