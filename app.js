// first way of building objects: 
// function constructors and the keyword "new"

function Person(firstname, lastname) { // parameters are optional
    
    console.log(this); // the empty object created by "new"
    this.firstname = firstname; //'John';
    this.lastname = lastname; //'Doe';
    console.log('This function is invoked.');
    
    // can break this process by returning something
    // return { greeting: 'i got in the way'};
}
// a function used specifically to construct an object is called a function constructor

// new is just an operator
// it creates an empty object first, then it calls the Person() function
// the new keyword changes what the this variable points to; it points to the new empty object. 
// as long as the Person() function doesn't return a value, the JS engine will return the object created by the new operator
var john = new Person('John', 'Doe') //new Person();
console.log(john);

// you can create as many Persons() as you want, but they all have the same property values. Each time a constructor is called, a new empty object is created
var jane = new Person('Jane', 'Doe') //new Person();
console.log(jane);

// function constructor: a normal function that is used to construct objects. The 'this' variable points to a new empty object, and that object is returned from the function automatically (as long as you don't return anything from the function)