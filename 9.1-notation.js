/* ------------------------- Dot Notation's  Limitation -------------------------> !!!
*/

/* -------------------- Using . dot Notation --------------------> !!!
*/
const object = {
    123 : 'digit',
    123name: 'start with digit',
    name123: 'does not start with digit',
    $name: '$ sign',
    name-123: 'hyphen', // Use "-" quotes to define property name containing hyphen 😡
    NAME: 'upper case',
    name: 'lower case'
};

/* --------------------Accessing properties using . dot notation-------------------- */

console.log(object.123); // Invalid syntax, property name cannot start with a digit 😡

console.log(object.123name); // Invalid syntax, property name cannot start with a digit 😡

console.log(object.name123); // Valid syntax, returns "does not start with digit" 🙂

console.log(object.$name); // Valid syntax, returns "$ sign" 🙂

console.log(object.name-123); // Invalid syntax, "-" is not allowed in property name without quotes 😡

console.log(object.NAME); // Valid syntax, returns "upper case" 😊

console.log(object.name); // Valid syntax, returns "lower case" 😊





/* -------------------- Using [] Bracket Notation --------------------> !!!
*/
const object2 = {
    123 : 'digit',
    123name: 'start with digit',
    name123: 'does not start with digit',
    $name: '$ sign',
    name-123: 'hyphen', // Use "-" quotes to define property name containing hyphen 😡
    NAME: 'upper case',
    name: 'lower case'
};


/* --------------------Accessing properties using [] bracket notation-------------------- */

console.log(object2[123]); // Valid syntax, returns "digit" 😊

console.log(object2['123name']); // Valid syntax, returns "start with digit" 😊

console.log(object2['name123']); // Valid syntax, returns "does not start with digit" 😊

console.log(object2['$name']); // Valid syntax, returns "$ sign" 😊

console.log(object2['name-123']); // Valid syntax, returns "hyphen" 😊

console.log(object2['NAME']); // Valid syntax, returns "upper case" 😊

console.log(object2['name']); // Valid syntax, returns "lower case" 😊