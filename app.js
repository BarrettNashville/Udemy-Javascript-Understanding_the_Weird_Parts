var Barrett = { 
    firstname:'Barrett', 
    lastname:'Cunningham',
    address:{
        street: '123 Main St',
        city: 'Nashville',
        state: 'TN'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Barrett);

greet({ 
    firstname: 'Mary', 
    lastname: 'Doe' 
});

Barrett.address2 = {
    street: '333 Second St.'
}