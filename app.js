// inheritance: one object gets access to the properties and methods of another object
// classical inheritance: whats in C#, Java, etc. negatives: it is verbose. 
// prototypal inheritance: simple, flexible, extensible, easy to understand

// All objects (including functions) have a prototype property. Its simply a reference to another object we'll call proto. It stands alone, you could use it by itself if you wanted to. The prototype object can also have its own prototype. This is the Prototype Chain. 
// Different objects can share the same prototype if you want them to. 

var person = { 
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
        // "this" refers to whatever object originated the call. john in the case below.
    }
}

var john = { 
    firstname: 'John',
    lastname: 'Doe'
}

//lets do it wrong first, don't ever do this because modern browsers do provide a way to directly access the prototype but this can cause a performance problem. 

john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());
