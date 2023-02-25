// Global scope - variables declared outside any function or block  ----------> !!!
let globalVar = "I'm in the global scope";


function myFunction() {

  // Local scope - variables declared inside a function  ---------------> !!!
  let localVar = "I'm in the local scope";
  console.log(localVar); // Output: I'm in the local scope


  // Block scope - variables declared inside a block (inside {} braces) -----> !!!
  {
    const blockVar = "I'm in the block scope";
    console.log(blockVar); // Output: I'm in the block scope
  }

  // console.log(blockVar); // Output: Uncaught ReferenceError: blockVar is not defined

}

console.log(globalVar); // Output: I'm in the global scope

// console.log(localVar); // Output: Uncaught ReferenceError: localVar is not defined

myFunction();