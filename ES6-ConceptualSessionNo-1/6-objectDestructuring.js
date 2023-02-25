// Define an object called person1 with some properties
const person1 = {
    name: "Hero Alom",
    age: 34,
    phone: "039945924",
    address: "bari nai",
    p: [1, 2, 3, 4]
}

// Destructure the p property from person1 object
const {p} = person1;

// Destructure the first element of the p array
const [number] = p;

// Log the value of number to the console
console.log(number);

// Define a new object called person2 using spread operator to clone person1
// person2.isMale property is added
// console.log(person2)

/*
const person2 = {...person1};
person2.isMale = true;
console.log(person2)
*/

// Destructure name, address properties from person1 object and assign the remaining properties to badbakijinis variable
// console.log(badbakijinis)
// console.log(name,barikoi)

/*
let {name,address,...badbakijinis} = person;
console.log(badbakijinis)
console.log(name,barikoi)
*/

// Assign name, age, and address properties of person1 to separate variables
// console.log(Name,age,bari)

/*
const Name = person.name;
const age = person.age
const bari = person.address;
console.log(Name,age,bari)
*/