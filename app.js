function sayHiLater() {
    var greeting = 'Hi';
    
    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// sayHiLater has already been finished for 3 seconds when the anonymous callback function passed to setTimeout is triggered, but it still has access to the greeting variable set by sayHiLater

// jQuery uses function expressions and first-class functions
//$("button").click(function() {
//    
//});

// callback function: I executed you, and you execute this other function for me when you're done. 
// another definition: a function you give to another function, to be run when the other function is finished.
// so the fucntion you call (invoke), 'calls back' by calling the function you gave it when it finishes

// here is a more simplified example:

function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 2000; // some more work
    
    callback(); // the 'callback', it runs the function i give it
}

tellMeWhenDone(function() {
    console.log('I am done!');
});

tellMeWhenDone(function() {
    alert('I am done!');
});

