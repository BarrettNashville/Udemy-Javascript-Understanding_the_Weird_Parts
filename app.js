// Dangerous aside about arrays and for...in...

var arr = ['John', 'Jane', 'Jim'];

for(var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

// arrays in JS are a little different than they are in other languages
// arrays have name/value pairs. there are 3 properties on the array above. but this causes a problem if a framework adds features to the prototype of Arrays.

console.log('---------');

Array.prototype.myCustomFeature = 'cool!';

var arr2 = ['John', 'Jane', 'Jim'];

for(var prop in arr2) {
    console.log(prop + ': ' + arr2[prop]);
}

// in the case of arrays, DON'T use for...in... . Use instead, the standard for(var i = 0; i < arr.length; i++) syntax