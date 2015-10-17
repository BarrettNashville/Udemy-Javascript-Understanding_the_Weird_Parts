//How can coersion be useful? Use these only in console.

Boolean(undefined)
//false

Boolean(null)
//false

Boolean("")
//false

// Useful example:

var a;

// goes to the Internet and looks for a value

if(a) {
    console.log('Something is here');
}

//

Boolean(0)
//false

//If there is any chance the variable can become a 0, don't use this method. If that is the case though, you could use this if statement:

if(a || a === 0) {
    console.log('Something is here');
}
