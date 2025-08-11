// Prototype: A single template object that all objects of the same type inherit methods and properties from,
// without each instance having its own copy.

let arr1 = [1, 2, 3];
arr1.sayHello = () => {
    console.log("Hello! I am arr1");
};

let arr2 = [1, 2, 3];
arr2.sayHello = () => {
    console.log("Hello! I am arr2");
};

// arr1.sayHello === arr2.sayHello -> false
// Because these are separate function objects in memory for each array.

// "abc".toUpperCase === "xyz".toUpperCase -> true
// Because toUpperCase is part of String.prototype, shared by all string instances.

//so we can access proto ,to change the definitionpf specifice object
//accessing the refeence object
arr.__proto__;

// We can override methods in the prototype:
arr.__proto__.push = (n) => { 
    console.log(`pushing number : `, n);
};

// Now pushing to any array will use the overridden method:
arr1.push(4); // logs: Pushing number: 4

//we can also access actual obeject of prototype too
//actual prototype
Array.prototype

//similarly string ptototype 
String.prototype