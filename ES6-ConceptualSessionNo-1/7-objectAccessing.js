const Person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '09432723',
        email: "abul@gmail.com"
    },
    education: {
        schoolName: "andorkilla high school",
        subjects: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
}

console.log(Person.education.subjects[1].mark);

/* ------------ No: 1 -------------- */
const age = Person.age;

/* ------------ No: 2 -------------- */
const a = Person['name']

/* ------------ No: 3 -------------- */
const property = 'name'
const aa = Person[property]

console.log(aa)