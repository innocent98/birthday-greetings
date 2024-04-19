// Conditional statements
// if statement

const minAge = 18;
const maxAge = 70;

// const age = 20

const person = {
  name: "Shalom",
  age: 36,
  color: "yellow",
  hair: "black",
  nationailty: "Nigerian",
};

if (person.age >= minAge && person.age <= maxAge) {
  //   console.log("You are eligible to vote.");
} else if (person.age > maxAge) {
  //   console.log("Sorry, you are too old for voting");
} else {
  //   console.log("Sorry, you are too young to vote.");
}

// switch statement
const dayOfWeek = "Tuesday";

switch (dayOfWeek) {
  case "Monday":
    // console.log("It's the start of the week");
    break;
  case "Friday":
    // console.log("It's almost the weekend");
    break;

  default:
    // console.log("It's a regular day.");
    break;
}

// loops
// for &  while loops
for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}

// while loop
let count = 0;

while (count <= 3) {
  // console.log(count);
  count++;
}

// Functions
// Functions are reusable blocks of code that can be called with specific arguments.
// Function declaration
function addNum() {
  // let num = document.getElementById("num");

  let a = 2;
  let b = 4;

  const result = a + b;

  // return (num.innerHTML = result);
}

const response = addNum();
// console.log(response)

// pass parameters and return
const greet = (name) => {
  // console.log(`Hello, ${name}`)
};

greet("Shalom");
greet("Peter");
greet("Marcus");

function numSum(a, b) {
  const result = a + b;
  // console.log(result);
}

numSum(5, 4);

function changeColor(value) {
  switch (value) {
    case 1:
      console.log("the color is red");
      break;

    case 2:
      console.log("the color is white");
      break;

    case 3:
      console.log("the color is black");
      break;

    default:
      console.log("the color is neutral");
      break;
  }
}

changeColor(1)
changeColor(2)
changeColor()
