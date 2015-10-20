// he goes through a lot of examples in the console using built in function constructors like Number(), String(), Date() but says these create objects, not primitives. but these objects do get access to the methods of the prototypes, which can be very helpful. 

/*
var a = new String("John")
undefined
String.prototype.indexOf('o')
-1
String.prototype.indexOf('Jo')
-1
a.indexOf('o')
1
a
String {0: "J", 1: "o", 2: "h", 3: "n", length: 4, [[PrimitiveValue]]: "John"}
// this next line is an example of JS "boxing" the string primitive into an object to get access to its length property
"John".length
4
// it would be the same as doing this. this is important in the example at the bottom
new String("John").length
4
var a = new Date("01/14/15")
undefined
a
Wed Jan 14 2015 00:00:00 GMT-0600 (Central Standard Time)
Date.prototype
Invalid Date
Date.prototype.toJSON
toJSON() { [native code] }
Date.prototype.toJSON()
null
a.toJSON()
"2015-01-14T06:00:00.000Z"
*/

// this can be useful for building on extra features to all strings, for instance

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}
console.log("John".isLengthGreaterThan(3)); // this works because the string was converted to an object automatically. can you do that with numbers? no. the following causes an error when you type 3.isPositive() in a console. but if you type var a = new Number(3) and then a.isPositive(), it works.

// its best NOT to use the built in function constructors for these primitive types (unless you have to)

Number.prototype.isPositive = function() {
    return this > 0;
}
