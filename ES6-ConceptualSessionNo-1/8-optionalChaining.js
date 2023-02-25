/* ---------------------Optional chaining  ?.  ---------------------- */

// Define an object with nested properties
const user = {
  id: 1,
  name: "John Doe",
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890"
  },
  orders: [
    { id: 101, product: "Widget", price: 9.99 },
    { id: 102, product: "Gadget", price: 14.99 },
    { id: 103, product: "Thingamajig", price: 19.99 }
  ]
};

// Use optional chaining to access a nested property
const userEmail = user?.contact?.email;
console.log(userEmail); // Output: "john.doe@example.com"

// Use optional chaining to access a nested property that does not exist
const userFaxNumber = user?.contact?.fax;
console.log(userFaxNumber); // Output: undefined

// Use optional chaining to access an array element
const thirdOrderPrice = user?.orders?.[2]?.price;
console.log(thirdOrderPrice); // Output: 19.99

// Use optional chaining to access an array element that does not exist
const fourthOrderProduct = user?.orders?.[3]?.product;
console.log(fourthOrderProduct); // Output: undefined

// Use optional chaining with function calls
const getUserFullName = (user) => user?.firstName + " " + user?.lastName;
const fullName = getUserFullName({ firstName: "John", lastName: "Doe" });
console.log(fullName); // Output: "John Doe"

// Use optional chaining with methods
const stringLength = user?.name?.length;
console.log(stringLength); // Output: 8