/* ---------- class syntactic sugar ---------- */


class Instructor{   /* Define a class called Instructor */

    name    /* Declare a property called name */

    designation = 'Web Course Instructor'   /* Declare a property called designation and initialize it with 'Web Course Instructor' */

    team = 'web team'   /* Declare a property called team and initialize it with 'web team' */

    location;   /* Declare a property called location */

    constructor(name, location){   /* Define a constructor method that takes two parameters: name and location */

        this.name = name;   /* Set the value of the name property to the value of the name parameter */

        this.location = location;   /* Set the value of the location property to the value of the location parameter */
    }
    startSupportSession(time){   /* Define a method called startSupportSession that takes a parameter called time */

        console.log(`start the support session at ${time}`) /* Log a message to the console */
    }
    createQuiz(module){   /* Define a method called createQuiz that takes a parameter called module */

        console.log(`please create quiz for module ${module}`)  /* Log a message to the console */
    }
}

const aamir = new Instructor('aamir', 'mumbai')    /* Create a new instance of the Instructor class and assign it to a variable called aamir */

console.log(aamir);    /* Log the value of the aamir variable to the console */

aamir.startSupportSession('9.00');    /* Call the startSupportSession method of the aamir object and pass '9.00' as a parameter */

aamir.createQuiz(60);    /* Call the createQuiz method of the aamir object and pass 60 as a parameter */

const solaiman = new Instructor('Solaiman Khan', 'dhaka')    /* Create a new instance of the Instructor class and assign it to a variable called solaiman */

console.log(solaiman);    /* Log the value of the solaiman variable to the console */