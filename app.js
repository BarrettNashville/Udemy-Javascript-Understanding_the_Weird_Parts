var person = {
    firstname: 'John',
    lastname: 'Doe', 
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    // fails if you call logname(); directly because "this" is pointing to the global object
}

var logPersonName = logName.bind(person);
// there are three built in methods available to every function object: call(), apply(), and bind()
// bind() allows you to pass whatever object you want to be the "this" variable when you run the function. the bind() method returns a new function, it actually makes a copy of the logName function in this case and does some special stuff behind the scenes so that "this" points by reference to the passed object

logPersonName();

//you can immediately call the bind method when assigning the function to the variable

var logName2 = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
}.bind(person);

logName2();


//

var logName3 = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---------');
}

var logPersonName2 = logName3.bind(person);

logPersonName2('en');

// call() calls the function, but it lets you bind to the "this" variable using the parameter passed. bind creates a copy of the function with the "this" variable bound, but it does not call the function. 

logPersonName2.call(person, 'en', 'es');

// apply() is the same as call() except it wants an array of parameters. thats the only difference. this can be useful for mathematical functions because you can pass any number of values inside the array. so, for instance, this would throw an error:
//logPersonName2.apply(person, 'en', 'es');

//but this works
logPersonName2.apply(person, ['en', 'es']);


// immediately invoking with apply()

(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---------');
}).apply(person, ['en', 'es']);

/////////////////////////////////////////////////////
// When would you actually ever use this?

// function borrowing

var person2 = {
    firstname: 'Jane', 
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying
// creating a copy of a function but with some preset parameters

function multiply(a,b) {
    return a*b;
}

// since bind() creates a copy of the method, this next line permanently sets the value of the a paramter when the copy is made. 
var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(4));

