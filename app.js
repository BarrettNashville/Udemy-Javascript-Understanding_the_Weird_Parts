// ES6 has a new concept coming to create objects and set prototype: classes
// this is what a class looks like in ES6:

"use strict"

class Person {
    
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    greet() {
        return 'Hi ' + this.firstname;
    }
}

var john = new Person('John', 'Doe');
console.log(john.greet());

// class is not an object in most other languages. in JS, Person here is an object.
// the author doesn't use this syntax. I believe he likes Object.create() better.

// using the class syntax, you set the prototype like so:

class InformalPerson extends Person { // extends sets the prototype (__proto__)
        
        constructor(firstname, lastname) {
            super(firstname, lastname);
        }
        
        greet() {
            return 'Yo ' + this.firstname;
        }
}

var jane = new InformalPerson('Jane', 'Doe');
console.log(jane.greet());

// class is just syntactic sugar, it doesn't do anything different