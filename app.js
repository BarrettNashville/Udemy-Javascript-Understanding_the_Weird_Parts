var arr1 = [1, 2, 3];
console.log(arr1);

// to create a copy without functional programming doubling each value
var arr2 = [];
for(var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
console.log(arr2);

// with functional programming

function mapForEach(arr, fn) {
    var newArr = [];
    for(var i = 0; i < arr1.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

var arr3 = mapForEach(arr1, function(item){
   return item * 2; 
});
console.log(arr3);

// do something else to the array using the same mapForEach function 
var arr4 = mapForEach(arr1, function(item){
   return item > 2; 
});
console.log(arr4);

// create a function to use with mapForEach that allows you to pass a variable which it uses conditionally 

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

// an easier way without having to use bind every time

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);

// when doing functional programming, you're splitting your behavior down into smaller and smaller increments. because of this, it's important not to mutate data in those functions. instead, you want to return a new result set. (guess that's why LINQ always returns a new collection instead of mutating the one passed to it.)