function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

// invoking a function that returns a function, and then invoking the function that was returned
greet('Hi')('Tony');

// this still works when assigned to an intermediary variable
// how does the sayHi function still know the whattosay variable
// its possible because of closures
var sayHi = greet('Hi');
sayHi('Tony');

// closure means the JS engine saves variables that would have otherwise been garbage disposed. 