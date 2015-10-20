function Person(firstname, lastname) { 
    
    console.log(this); 
    this.firstname = firstname; 
    this.lastname = lastname; 
    console.log('This function is invoked.');
    
}

// if you forget to add the "new" keyword, it causes problems
// to prevent this, we use a capital letter for the name of the function that is going to be a function constructor. That way, if you have an error and look through your code and see a function that starts with a capital letter without the "new" keywowrd in front of it, then you probably forgot to add it.
// there are new ways to create objects coming in new versions of JS, so this way of creating objects will likely eventually not be used
var john = Person('John', 'Doe')//new Person('John', 'Doe')
console.log(john);

var jane = new Person('Jane', 'Doe')
console.log(jane);

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}

console.log(john.getFormalFullName());
