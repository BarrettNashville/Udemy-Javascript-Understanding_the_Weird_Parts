function Person(firstname, lastname) { 
    
    console.log(this); 
    this.firstname = firstname; 
    this.lastname = lastname; 
    console.log('This function is invoked.');
    
}

var john = new Person('John', 'Doe')
console.log(john);

var jane = new Person('Jane', 'Doe')
console.log(jane);

// how do we set the prototype? well, when you use the function constructor, it sets the prototype for you.
// john.__proto__ returns Person {}
// any time you create a function object, they all get a prototype member. It is used ONLY by the new operator. It is only used when you are using a function as a function constructor

// The prototype property on a function is not the prototype OF the function, its the prototype of any objects created if you're using the function as a function constructor
// It starts its life as an empty object

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

// this prototype property of all functions is where the prototype chain points for any objects created using that function as a constructor

// you can add members to the prototype of the FUNCTION on the fly later after any objects have been created by that function constructor, and all those created objects will have access to that new member immediately

// this means you can add features to ALL objects created by a function constructor at once AFTER they have already been created 

Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}

console.log(john.getFormalFullName());

// in a lot of good JS libraries, properties are set up inside function constructors but methods are sitting on the prototype
// why not add methods inside function constructor
// anything added to objects take up memory space
// every copy gets a copy of the function unless you add it to the prototype
// each object will have different values, and thus will need different copies, of each property. but they will ALL use the SAME copy of each method