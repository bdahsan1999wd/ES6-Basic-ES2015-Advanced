/* --------------------1. var let const-------------------- */
// break up with var


/* Declare an array called "numbers" with four elements */
const numbers = [12, 546, 45, 98];

/* Declare a variable called "salary" and set its value to 450 */
let salary =  450;

/* Reassign the value of "salary" to 455 */
salary = 455;



/* --------------------2. default parameters-------------------- */

/* Define a function called "calculateSalary" that takes three parameters: "salary", "tax", and "bonus" */
/* The default values for "tax" and "bonus" are 0.25 and 0, respectively */

function calculateSalary(salary, tax = 0.25, bonus = 0){
    /* Calculate the remaining salary after tax */
    const remaining = salary - salary*tax;
    /* Add the bonus to the remaining salary to get the total salary */
    const total = remaining + bonus;
    /* Return the total salary */
    return total;
}



/* --------------------3. template string-------------------- */

/* Define a string called "elementHTML" using a template string */
/* The string includes two lines of text and two expressions in ${} that call functions and access elements of the "numbers" array */

const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`


/* --------------------4. Arrow function--------------------- */

/* Define an arrow function called "doubleIt" that takes one parameter "x" and returns the result of "x * 2"        */
const doubleIt = x => x * 2;

/* Define another arrow function called "calculateSalary2" that takes three parameters: "salary", "tax", and "bonus" */
/* The function returns the remaining salary after tax plus the bonus */
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;



/* ---------------------5.  ...spread  -------------------- */

/* Declare an array called "ages" with six elements */
const ages = [11, 13, 15, 14, 10, 16];

/* Create a new array called "newAges" using the spread operator and adding three new elements to the end */
const newAges = [...ages, 22, 24, 23];



/* --------------------6. destructuring-------------------- */

/* ---------------------object------------------ */
/* Declare an object with five properties and destructure it to create variables for three of the properties and an object for the remaining properties */
const {x, y, z, ...c} = {x: 45, y: 12, z: 33, name: 'Sakib Al Hasan', salary: 450000}

/* ---------------------array------------------ */
/* Declare an array with five elements and destructure it to create variables for the first two elements and an array for the remaining elements */
const [a, b, ...r] = [12, 45, 21, 65, 98];