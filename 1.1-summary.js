// 1. optional chaining---------------> !!!
student.marks?.math

// must
// 2. map, filter, find

// 3. (optional): forEach, reduce (advanced)

// 4. class

// 5. (optional) inheritance, super

// 6. (must) prototypical Inheritance


/* ********************************************************** */

const num = [1,2,3,4,5];
let output = num.filter(n => n%2);
// console.log(output);


/* ---------------------------------------------- */
// How will you find the first friend who has a name with 5 characters?

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];

const friend = friends.find(friend => friend.length === 5);
// console.log(friend);


/* --------------------------------------------- */
// How will you get the price from the product object? 

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

const{price} = product;
// console.log(price);

/* -------------------------------------------- */
// How will you create an instance of  Person Class ?

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
const student = new Person("Ahsan", 25);

// console.log(student.name);
// console.log(student.age);

// Optional chaining----------------------------> !!!

let profile = {
  user: {
    name: 'sup',
    email: 'sup@gmail.com'
  }
}
const chain = profile.user.phone?.number
console.log(chain);