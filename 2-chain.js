const users = [ {id: 1, name: 'abul', job: 'doctor'} ]

console.log(users[0].name);

/* ------------------------------------------ */

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'chamca'},
    ]
}
const firstJob = data.data[1].job;

console.log(firstJob);

/* ---------------------optional chaining--------------------- */

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
} 

const userFloor = user.address.sec?.street;
console.log(userFloor);

const myFloor = user.address?.fourth?.city;
console.log(myFloor);

const yourFloor = user.address.street.first;
console.log(yourFloor);