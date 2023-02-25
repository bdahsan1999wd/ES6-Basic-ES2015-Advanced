// Define a function with default parameter values
function add(x=0,y=0){
    console.log(x,y); // Output: 5 10
    const total = x + y; // Add the values of x and y
    return total; // Return the sum of x and y
}


// Call the function with arguments
console.log(add(5,10)); // Output: 15