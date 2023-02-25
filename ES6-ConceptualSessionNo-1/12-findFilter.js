const numbers = [12, 32, 25, 75, 13, 54, 97, 25];


/* ---------------- find() --------------- */

const x = numbers.find(n => n >= 50)
console.log(x);

const w = numbers.find(n => n === 50)
console.log(w);

/* ---------------- filter() ------------- */

const y = numbers.filter(n => n <= 50)
console.log(y);

const z = numbers.filter(n => n === 50)
console.log(z);