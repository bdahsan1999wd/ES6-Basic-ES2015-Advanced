const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = number * 2;
        // const doubled = doubleIt(number);
        // const doubled = tripleIt(number);
        output.push(doubled);
    }
    return output;
}
/* ------------------------------------ */
function doubleIt(num){
    return num * 2;
}
/* ------------------------------------ */
const tripleIt = num => num * 3;
/* ------------------------------------ */

const result = getDoubles(numbers);
console.log('for loop and function No: 1', result);

/* ------------------------------------ */

/* 
purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

/* ------------------------- map()-------------------------> !!!
*/

/* Arrays can only be map() on to-----> !!!
*/

const doubleItFunction = num => num * 2;

const numberOfArray = [2, 8, 4, 6, 3];

const makeDouble = numberOfArray.map(doubleItFunction);
console.log('Using map() and function No: 2', makeDouble);

const makeDoubleDirect = numberOfArray.map(num => num * 2);
console.log('Using map() and direct function No: 3', makeDoubleDirect);

const makeDouble2 = numberOfArray.map(x => x * 2);
console.log('using map() No: 4', makeDouble2);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log('using map() No: 5', fiveTimes);