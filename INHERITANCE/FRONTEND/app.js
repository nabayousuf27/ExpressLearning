// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

class Person {
    constructor(name, age) {
        console.log("person class constructor");
        this.age=  age;
        this.name = name;
        }
        talk() {
        console.log(`Hi, I am ${this.name}`);
        }
    }

class Student extends Person {
        constructor(name, age, marks){
        console.log("student class constructor");
        super(name, age); //parent class constructor is being called
        this.marks = marks;
        }
    }

 class Teacher extends Person {
    constructor(name, age, subject) {
    super(name, age); //parent class constructor is being called
    this.subject = subject;
    }
 }
//console
// let stud1 = new Student("naba,25,95");
// stud1.marks
// stud1.name
// stud1.age
// stud1.talk()

  