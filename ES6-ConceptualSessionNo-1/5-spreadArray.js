const number = [2, 4, 1, 9, 3, 5, 26, 7];
const number2 = [32, 45, 67];

// Finding the minimum value of an array using spread operator
console.log(Math.min(...number));

// Combining two arrays using spread operator
const newArr = [123, 21, 24, ...number2, 99];
console.log(newArr);

// Demonstrating the difference between primitive and reference types
const x = 5;
let y = x;
y = 8;
console.log(x); // Output: 5
console.log(y); // Output: 8

// Demonstrating the use of spread operator for creating a new copy of an array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];
arr1.push(99);
arr1.push(100);
arr2.push(55);
console.log(arr1); // Output: [1, 2, 3, 4, 5, 99, 100]
console.log(arr2); // Output: [1, 2, 3, 4, 5, 55]

// Demonstrating the use of destructuring assignment to extract values from an array
const arr = [1, 2, 3, 4, 5, 6, 7];
const [first, second, ...Ahsan] = arr;

console.log(first, second); // Output: 1 2
console.log(Ahsan); // Output: [3, 4, 5, 6, 7]
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]