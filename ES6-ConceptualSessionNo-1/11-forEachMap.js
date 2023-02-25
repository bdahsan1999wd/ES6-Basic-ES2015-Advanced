const arr = [1, 2, 3, 4, 5];

console.log(arr);



/* ------------------------------------------------ */
arr.map((number,index,array) => {
    console.log(number + ' ' + index + ' ' + array)
})
/* ------------------------------------------------ */



/* ------------------forEach()-------------------- */

// arr.forEach(number => console.log(number))
// arr.forEach(number => console.log(number*2))

const newAr = arr.forEach((number) => number)
console.log(newAr);

/* ------------------map()---------------------- */

// arr.map(number => console.log(number))
// arr.map(number => console.log(number * 2))

// const newArr = arr.map((number) => number*2)
// console.log(newArr);