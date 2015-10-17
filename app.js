function greet(name) {
    console.log('Hello ' + name);
}

greet('Barrett');
greet(); // outputs Hello undefined

//ES6 allows you to set a default value. But old code uses this trick:

function greet(name) {
    name = name || '<Your name here>'; // this doesn't return true or false
    console.log('Hello ' + name);
}

greet('Barrett');
greet(); // outputs Hello <Your name here>

//The or operator's ( || ) special behavior is that if you pass to it two values that can be coerced to true and false, it will return the first one that converts to true. You still have to be careful with a zero ( 0 ) since it converts to false. 