/* -------------------------------- class ------------------------------ */

/* Define a class named "TeamMember" */
class TeamMember{

    name;  /* Declare a "name" property */

    location;  /* Declare a "location" property */
    
    /* Define a constructor that accepts a "name" and "location" parameter */
    constructor(name, location){

        this.name = name;  /* Set the "name" property to the value of the "name" parameter */

        this.location = location;  /* Set the "location" property to the value of the "location" parameter */
    }
    
    /* Define a method named "provideFeedback" */
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)  /* Log a message that includes the name of the team member */
    }
}

/* Define a class named "Instructor" that extends the "TeamMember" class */
class Instructor extends TeamMember{

    designation = 'Web Course Instructor'  /* Declare a "designation" property with a default value */

    team = 'web team';  /* Declare a "team" property with a default value */
    
    /* Define a constructor that accepts a "name" and "location" parameter
    and calls the constructor of the parent class */
    constructor(name, location){
        super(name, location);
    }
    
    /* Define a method named "startSupportSession" that accepts a "time" parameter */
    startSupportSession(time){
        console.log(`start the support session at ${time}`)  /* Log a message that includes the value of the "time" parameter */
    }
    
    /* Define a method named "createQuiz" that accepts a "module" parameter */
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)  /* Log a message that includes the value of the "module" parameter */
    }
}

/* Define a class named "Developer" that extends the "TeamMember" class */
class Developer extends TeamMember{
    designation = 'Web Course Instructor'  /* Declare a "designation" property with a default value */

    team = 'web team'  /* Declare a "team" property with a default value */
    tech;  /* Declare a "tech" property */
    
    /* Define a constructor that accepts a "name", "location", and "tech" parameter
    and calls the constructor of the parent class */
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;  /* Set the "tech" property to the value of the "tech" parameter */
    }
    
    /* Define a method named "developFeature" that accepts a "feature" parameter */
    developFeature(feature){
        console.log(`Please develop the  ${feature}`)  /* Log a message that includes the value of the "feature" parameter */
    }
    
    /* Define a method named "release" that accepts a "version" parameter */
    release(version){
        console.log(`please release the version ${version}`)  /* Log a message that includes the value of the "version" parameter */
    }
}

/* Define a class named "JobPlacement" that extends the "TeamMember" class */
class JobPlacement extends TeamMember {
    designation = 'Job Placement Commandos';  /* Declare a "designation" property with a default value */

    team = 'Job Placement';  /* Declare a "team" property with a default value */

    region;   /* Declare a "region" property */
  
    /* Define a constructor that accepts a "name", "location", and "region" parameter
    and calls the constructor of the parent class */
    constructor(name, location, region) {
      super(name, location);
      this.region = region;  /* Set the "region" property to the value of the "region" parameter */
    }
  
    /* Define a method named "provideResume" that accepts a "feature" parameter */
    provideResume(feature) {
      console.log(`Please develop the ${feature}`);  /* Log a message that includes the value of the "feature" parameter */
    }
  
    /* Define a method named "prepareStudent" that accepts a "version" parameter */
    prepareStudent(version) {
      console.log(`Please release the version ${version}`);   /* Log a message that includes the value of the "version" parameter */
    }
  }
  
const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);

alia.provideFeedback();

const bipasha = new JobPlacement('bipasha', 'kolkata', 'India');
console.log(bipasha);

bipasha.prepareStudent('3.0');