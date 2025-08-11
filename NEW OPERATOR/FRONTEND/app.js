//constructors - doesn't return anything & start with capital letter
function Person(name, age){
   this.name = name;
   this.age = age;
};

  
Person.prototype.talk = function(){
    console.log(`HI, my name is ${this.name}`); 
}

let p1 = new Person("adam" , 25);
let p2 = new Person("eve" , 24);


//New operator : 
// The new operator lets developers create an instance(new object) of a user-defined object type or of one of the built-in object types that has a constructor function.
