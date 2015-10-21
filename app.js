var people = [
    {
        // the 'john' object
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        // the 'jane' object
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Third St.'
        ],
        greet: function() {
            return 'Hello!';
        }
    }
]

console.log(people);

// this type of complex initialization can look overwhelming, but 
// it is good for things like mocking