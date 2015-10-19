// function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');

// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    console.log('Hello ' + name);   
}();

var greeting2 = function(name) {
    return 'Hello ' + name;   
};

// this just returns the function definition
console.log(greeting2);
// invoke like so
console.log(greeting2('John'));

// now lets invoke it immediately so it returns the value to the variable, instead of returning the function object
var greeting3 = function(name) {
    return 'Hello ' + name;   
}('John');

console.log(greeting3);

// The typical syntax for an IIFE

var firstname = 'John';

(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);  
})(firstname);



