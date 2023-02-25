const Name = 'Ahsan';
const age = 25;
const job = 'Web Developer';


// Using string concatenation ---------------> !!!

const greeting = 'My Name is ' + Name + ', I am ' + age + ' years old, and I work as a ' + job + '.';

console.log(greeting); // Output: My Name is Ahsan, I am 25 years old, and I work as a Web Developer.

/* ----------------------------------------------------------- */

// Using template strings (using backticks `) -----------> !!!

const greetingTemplate = `My name is ${Name}, I am ${age} years old, and I work as a ${job}.`;

console.log(greetingTemplate); // Output: My Name is Ahsan, I am 25 years old, and I work as a Web Developer.