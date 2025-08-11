function PersonMaker(name, age){
    const person = {
        name : name,
        age : age ,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
};

//console
// let p1 = PersonMaker("naba",18);
// p1
// p1.talk();
// let p1 = PersonMaker("xyz",18);
// let p1 = PersonMaker("abc",18);

//DIsadvantage : p1 and p2 each have their own copy of the talk method, which is inefficient.
//If you create thousands of objects, you’ll have thousands of identical talk methods, which wastes memory.