var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

// JSON properties have to be wrapped in quotes
// in actual JavaScript, you can do this but don't have to
// JSON is technically a subset of object literal syntax
// anything that is JSON-valid is valid OLS, but not all OLS is valid JSON

/*
{
    "firstname": "Mary",
    "isAProgrammer": true
}
*/

// Built into JavaScript is a way to convert an object into JSON using JSON.stringify()

console.log(JSON.stringify(objectLiteral));

// You can also do the reverse using JSON.parse()

var jsonValue = JSON.parse('{"firstname": "Mary","isAProgrammer": true}');

console.log(jsonValue);