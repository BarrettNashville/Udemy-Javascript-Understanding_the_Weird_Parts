// Pure prototypal inheritance

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname; 
        // have to use "this" above; otherwise would look in the greet function context, not find it and look in the global context
    }
}

var john = Object.create(person);
// Object.create() creates an empty object with its prototype pointing at whatever you passed in
console.log(john);

/*
john.greet()
"Hi Default"
*/

// the pattern then is that you override whatever you want to by simply adding the properties and methods yourself to the created object

john.firstname = 'John';
john.lastname = 'Doe';

console.log(john);
/*
john.greet()
"Hi John"
*/

//this is pure prototypal inheritance
//its very powerful because you can mutate the prototype along the way
//you can add features you might need for specific use cases, for instance
//Object.create() is a newer thing that modern browsers are implementing
//for older browsers, you can use polyfill: code that adds a feature which the engine may lack

// polyfill
if(!Object.create) {
    Object.create = function(o) { // this line adds "create" to the global object 
        if(arguments.length > 1) {
            throw new Error('Object.create implementation'
            + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}