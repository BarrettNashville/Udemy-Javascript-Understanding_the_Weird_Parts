function buildFunctions() {
    
    var arr = [];
    
    for(var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i);
            }
        );
    }
    
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// all three function calls return 3 because the console.log is not actually run until after the buildFunctions function returns. when that functions execution context is popped off the stack, the internal variables are closured (?) and the i variable (which ends up at 3 at the end of the function call) is referenced by all all the fs function calls


// new to ES6 is the "let" variable. The let variable is scoped to the block and placed inside this execution context. Each let statement reserves a different place in memory for the value in this case. 

function buildFunctions2() {
    "use strict"
    var arr = [];
    
    for(var i = 0; i < 3; i++) {
        let j = i;
        arr.push(
            function() {
                console.log(j);
            }
        );
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

// to do this with an older version of JS, create separate execution contexts using IIFEs that return functions

function buildFunctions3() {
    var arr = [];
    
    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            })(i)
        );
    }
    
    return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();