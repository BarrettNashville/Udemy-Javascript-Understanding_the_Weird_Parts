var a = 3;
console.log(typeof a); // lowercase "number" output, not "Number" which is an object

var b = "Hello";
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // weird! returns "object"
console.log(d.toString());  // returns an empty string "" because it tries to convert the contents of the array
console.log(Object.prototype.toString.call(d)); // better!
// .call() means: invoke this function but tell it what the "this" variable should point to

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); // object
console.log(e instanceof Person); // going down the prototype chain of e, do you find "Person"? yes

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);

