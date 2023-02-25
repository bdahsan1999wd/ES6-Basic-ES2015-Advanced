// class Student{
//     name = 'Ahsan';
//     roll = 12
// }

// const student1 = new Student();
// console.log(student1.name)


/* ----------------class function------------------- */

// Define the Student class
class Student{
    name; // Declare a name property
    roll; // Declare a roll property
    
    // Define the constructor method, which is called when a new object is created from this class
    constructor(name,roll){
        // Assign the name and roll values passed to the constructor to the corresponding properties
        this.name = name;
        this.roll = roll;
    }
    
    // Define a method for displaying student details
    showDetails(){
        console.log(`My name is ${this.name}. My roll is ${this.roll}`)
    }
}

// Create a new student object using the Student class
const student1 = new Student('Ahsan', 12);

// Call the showDetails method to display the student's details
student1.showDetails();

// Create another student object
const student2 = new Student('Habib', 22);

// Call the showDetails method to display the second student's details
student2.showDetails();