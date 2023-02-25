const isStudent = true;
let x = 7;
let paragraph;


/* -------------------------------------------------------------- */


// Here, we have a boolean variable called `isStudent` with a value of `true`, a numeric variable called `x` with a value of `7`, and an empty variable called `paragraph`.

// This is an example of the same code implemented using an if-else statement instead of a ternary operator:

// if(isStudent === true){
//     paragraph = 'he is a student';
// }else{
//     paragraph = 'porasuna vallagena';
// }


 /* ------------------------------------------------------------ */


// This is an example of the same code implemented using a ternary operator:

paragraph = (isStudent === true) ? "he is student" : " porasuna vallagena";
// Here, we're using the ternary operator to assign a value to the `paragraph` variable based on the value of `isStudent`. If `isStudent` is `true`, the value assigned to `paragraph` is `"he is student"`. If it's not, the value assigned to `paragraph` is `"porasuna vallagena"`.


/* ------------------------------------------------------------- */


// This is another example of the ternary operator used in a slightly different way:

(x === 5) ? console.log('he is student') : console.log('no student')

// Here, we're using the ternary operator to determine whether to print out "he is student" or "no student" to the console based on the value of `x`. If `x` is equal to `5`, the console output will be "he is student". If it's not, the console output will be "no student".

console.log(paragraph); // "he is student"