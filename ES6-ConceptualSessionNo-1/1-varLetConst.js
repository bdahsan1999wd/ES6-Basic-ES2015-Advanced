// Using var --------------------> !!!
var x = 10;
var y = 20;
var z = 30;

if (true) {
  var x = 100; // Redeclares the same variable
  var z = 300; // Redeclares the same variable
  console.log(x); // Output: 100
  console.log(y); // Output: 20
  console.log(z); // Output: 300
}

console.log(x); // Output: 100
console.log(y); // Output: 20
console.log(z); // Output: 300



// Using let --------------------> !!!
let a = 40;
let b = 50;
let c = 60;

if (true) {
  let a = 400; // Declares a new variable in the block scope
  let c = 600; // Declares a new variable in the block scope
  console.log(a); // Output: 400
  console.log(b); // Output: 50
  console.log(c); // Output: 600
}

console.log(a); // Output: 40
console.log(b); // Output: 50
console.log(c); // Output: 60



// Using const --------------------> !!!
const PI = 3.14159;
// PI = 3; // Output: Uncaught TypeError: Assignment to constant variable.

const person = {
  name: 'John',
  age: 30
};
person.age = 40; // Changes the value of age property
// person = { name: 'Jane', age: 20 }; // Output: Uncaught TypeError: Assignment to constant variable.

console.log(PI); // Output: 3.14159
console.log(person); // Output: { name: 'John', age: 40 }