function makeGreeting(language) {
    
    return function greet(firstname, lastname) {
        
        if(language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        
        if(language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }   
        
    }
    
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

// every time you call a function, you get a new execution context. so there are two different execution contexts for makeGreeting() and therefore two separate variables for the "language" prompt value