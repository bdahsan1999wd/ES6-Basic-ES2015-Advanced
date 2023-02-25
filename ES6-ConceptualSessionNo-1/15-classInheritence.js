// Define the Person class
class Person{
    name; // declare the name property
    age; // declare the age property
    
    // constructor function that sets the name and age properties
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
    // method that logs the person's name to the console
    showName(){
        console.log(`My name Is ${this.name}`)
    }
}

// Define the Student class, which extends the Person class
class Student extends Person{
    subject; // declare the subject property
    roll; // declare the roll property
    
    // constructor function that sets the name, age, subject, and roll properties
    constructor(name,age,subject,roll){
        super(name,age) // call the constructor of the base class to set the name and age properties
        this.subject = subject;
        this.roll = roll;
    }
    
    // method that logs the student's name, age, subject, and roll number to the console
    showDetails(){
        console.log(this.name,this.age,this.subject,this.roll)
    }
}

// Define the Teacher class, which extends the Person class
class Teacher extends Person{
    faculty; // declare the faculty property
    designation; // declare the designation property
    
    // constructor function that sets the name, age, faculty, and designation properties
    constructor(name,age,faculty,designation){
        super(name,age) // call the constructor of the base class to set the name and age properties
        this.faculty = faculty;
        this.designation = designation;
    }
    
    // method that logs the teacher's name, age, faculty, and designation to the console
    showDetails(){
        console.log(this.name,this.age,this.faculty,this.designation)
    }
}


// Create an instance of the Student class with name "Ahsan", age 25, subject "CSE", and roll number 55
const st = new Student("Ahsan",25,'CSE',55)

// Call the showDetails() method of the st object, which logs "Ahsan 25 CSE 55" to the console
st.showDetails()

// Create an instance of the Teacher class with name "Habib", age 43, faculty "EEE", and designation "LECTURER"
const th = new Teacher('Habib',43,'EEE','LECTURER')

// Call the showDetails() method of the th object, which logs "Habib 43 EEE LECTURER" to the console
th.showDetails()