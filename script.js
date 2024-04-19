// VARIABLES
// var, let, const
var myName = "Shalom Peter";
let mySchool = "Uniuyo";
const myLevel = "300l";

mySchool = "Uniport";
mySchool = "Aksu";

// Data Types
// Typs of data
// strings, booleans, numbers, object, arrays, float
let mySchoolName = "Uniyo";
let mySchoolLevel = 300;
let isStudent = true;
let favFruits = ["apple", "orange", "banana", "berry", "guava"];
favFruits.pop()
favFruits.push("watermelon", "mango");

// mapping an array in js
// favFruits.map((item) => console.log(item));

let courseMaterial = { title: "The red bull", pages: 200, isRead: false };

const person = {
  name: "Shalom",
  age: 16,
  color: "yellow",
  hair: "black",
  nationailty: "Nigerian",
};

const newPerson = {
  ...person,
  surname: "Peter",
};

// console.log(newPerson);

// Operators
let a = 5;
let b = 2;

let sum = a + b;
let product = a * b;
let differences = a - b;
let division = a / b;
let isGreaterThan = a < b; // comparison

// concatination
let firstName = "Shalom";
let FirstName = 'Becky'
let lastName = "Peter";

// let fullName = firstName + ' ' + lastName;
// another way to concatinate two strings
let fullName = `${firstName} ${lastName}`

// console.log(fullName);

// destructing of an array
let name1 = ['Marcus', 'Jahno', 'Victor']
let name2 = ['Shalom', 'Favour', 'Divine']

const newName = [...name1, ...name2]
// console.log(newName)

// utilizing js replace method
const phone = '+2349066128757'

const slicedPhone = phone.slice(6, 12)
const replacePhone = phone.replace(slicedPhone, '****')
// console.log(replacePhone)

// convertion
let string1 = '123'
let stringToNum = parseInt(string1)

let num1 = 223
let numToString = num1.toString()

// console.log(numToString + 2)

// rounding up a figure
let floatNum = 22.6
const randNum = Math.round(floatNum)
console.log(randNum)
