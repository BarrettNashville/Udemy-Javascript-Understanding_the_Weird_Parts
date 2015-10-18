greet();

//Function Statement (doesn't return a value)
function greet() {
    console.log('hi');
}

//Function Expression (returns the function object)
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();

function log(a) {
    console.log(a);
}

log(3);
log("hello");
log({
   greeting: 'hi' 
});
log(function() {
   console.log('hi'); 
});

// instead of displaying the function definiton, lets invoke it

// Passing a function as a parameter
function log2(a) {
  a();  
};

log2(function() {
   console.log('hi'); 
});