// reflection: an object can look at itself, listing and changing its properties and methods

var person = {
    firstname:'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't assign __proto__ to anything ever. for demo purposes only.
john.__proto__ = person;

// example of reflection in JS

// see all members available to an object
for( var prop in john) {
    console.log(prop + ': ' + john[prop])
}

// see john's members only
for( var prop in john) {
    if(john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

// extend

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

// combines all the properties of jane and jim to john
_.extend(john, jane, jim)

console.log(john);

// he jumps into the underscore.js source code and explains how the extend() method works