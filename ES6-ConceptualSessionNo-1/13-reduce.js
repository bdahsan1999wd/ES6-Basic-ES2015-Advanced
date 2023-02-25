const numbers = [1, 2, 3, 4, 5];

// Calculate the sum of all numbers using a for loop
let sum = 0;
for(let n of numbers){
    sum+=n
}
console.log(sum) // Output: 15


/* -------------------reduce---------------------- */

// Calculate the sum of all numbers using reduce method
const reduceSum = numbers.reduce((previous,current) => {
    return previous + current
} ,0)
console.log(reduceSum) // Output: 15

// Calculate the product of all numbers using reduce method
const reduceProduct = numbers.reduce((previous,current) => {
    return previous * current
} ,1)
console.log(reduceProduct) // Output: 120