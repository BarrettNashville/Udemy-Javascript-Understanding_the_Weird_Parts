function greet(firstname, lastname, language) {
    
    // you can set default parameters like so.
    // in ES6, you can do this by setting a parameter = value 
    language = language || 'en';
    
    //to do nothing if no args passed:
    
    if(arguments.length === 0) {
        console.log('Missing Parameters!');
        console.log('-----------');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log(arguments[0]);
    console.log('-----------');
    
    // arguments is array-like. its not actually an array but it does look and act like one in some ways
    
    // arguments will eventually be deprecated in favor of a spread parameter
    // so the function signature might look like this:
    //function greet(firstname, lastname, language, ...other)
    //and when calling greet, all extra parameters get wrapped up in an array called "other" in this case
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'en');