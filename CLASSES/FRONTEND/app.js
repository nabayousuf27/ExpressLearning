// Classes:
// Classes are a template for creating objects
// The constructor method is a special method of a class for creating and initializing an object instance of that class.
class Person {
    //constructor
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    //function
    talk() {
    console.log(`Hi, my name is ${this.name}`);
    }
}
//objects
let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);

// p1.talk === p2.talk --> true