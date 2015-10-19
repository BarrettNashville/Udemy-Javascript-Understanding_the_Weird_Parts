var greeting = 'Hola';

(function(global, name) {
    var greeting = 'Hello';
    global.greeting = 'Hello'
    console.log(greeting + ' ' + name);  
})(window, 'John');

console.log(greeting);

// this is a way of intentionally overwriting the global "greeting" variable. You pass a reference to the gloabl object to your function and then overwrite the variable in there.


