const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        122: 78,
        physics: 89,
        chemistry: 65
    },

}

/* ---------------------Dot notation----------------------- */

const marks = student.marks;
const math = student.marks.math;


/* ---------------------Bracket notation----------------------- */

const chemistry = student['marks']['chemistry'];
const subject = 'math';

const subjectMarks = student.marks[subject];

const marks2 = student.marks[subject];
console.log(marks2);