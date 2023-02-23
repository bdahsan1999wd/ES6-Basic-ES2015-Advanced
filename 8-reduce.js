/* -------------------- Simple Example : -------------------- */

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use the reduce method on the numbers array to compute the total sum of all the numbers
const total = numbers.reduce((accumulator, currentValue) => {
  // Add the current value to the accumulator
  accumulator += currentValue;

  // Return the accumulator for the next iteration of the reduce method.
  return accumulator;
}, 0);

// Output the total sum of all the numbers in the array
console.log(total); // Output: 15


/* ---------- Simple way reduce() : ---------- */

const num = [1, 2, 3, 4, 5];

const sum = num.reduce((acc, cur) => acc + cur, 0);

console.log(sum); // Output: 15



/* -------------------- Nested Example : -------------------- */

// Declare a nested array of numbers
const nestedNumbers = [[1, 2], [3, 4], [5]];

// Use the reduce() method to flatten the nested array
// The callback function takes two arguments: an accumulator and a current value
// The initial value for the accumulator is an empty array
const flatNumbers = nestedNumbers.reduce((acc, cur) => acc.concat(cur), []);

// Log the flattened array to the console
console.log(flatNumbers); // Output: [1, 2, 3, 4, 5]


/*  concat() meaning join two or more arrays into a new array -------> !!!
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = arr1.concat(arr2);

console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

/* -------------------------------------------------------- */

const arr = [1, 2, 3];

const newArr = arr.concat(4, 5, 6);

console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]



/* ---------- Nested way reduce() : ---------- */

// Define an array of objects
const orders = [
    { id: 1, items: ['Apple', 'Banana', 'Cherry'], total: 15 },
    { id: 2, items: ['Grape', 'Pineapple'], total: 10 },
    { id: 3, items: ['Orange', 'Lemon', 'Lime', 'Kiwi'], total: 20 },
  ];
  
  // Use the reduce method on the orders array to compute the total sales for all orders
  const totalSales = orders.reduce((accumulator, order) => {
    // Add the total value of the order to the accumulator
    accumulator += order.total;
  
    // Return the accumulator for the next iteration of the reduce method.
    return accumulator;
  }, 0);
  
  // Use the reduce method on the orders array to compute the total number of items sold for all orders
  const totalItemsSold = orders.reduce((accumulator, order) => {
    // Add the number of items in the order to the accumulator
    accumulator += order.items.length;
  
    // Return the accumulator for the next iteration of the reduce method.
    return accumulator;
  }, 0);
  
  // Output the total sales and total number of items sold for all orders
  console.log(totalSales); // Output: 45
  console.log(totalItemsSold); // Output: 9  