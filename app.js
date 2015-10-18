var greet = "Hello!";
var greet = "Hola!";

console.log(greet);

var english = {};
var spanish = {};

english.greetings = {};
english.greetings.greet = "Hello!";
spanish.greet = "Hola!";

// can't do this because greetings is undefined
// english.greetings.greet = "Hello!";

console.log(english);