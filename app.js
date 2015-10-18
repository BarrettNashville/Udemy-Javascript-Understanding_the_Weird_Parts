// this is the Array Literal Syntax, similar to the Object Literal Syntax

var myArray = [1, 2, 3];

// arrays can hold items of any type

var arr = [
    1,
    false,
    {
        name: 'Barrett',
        address: '111 Main St.'
    },
    function(name){
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];

console.log(arr);
arr[3](arr[2].name);