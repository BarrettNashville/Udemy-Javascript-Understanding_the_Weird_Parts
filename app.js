// gets a new object
var g = G$('John', 'Doe');

// use our chainable methods
//g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function() {

    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGreetr = G$('John', 'Doe');
    
    $('#logindiv').hide();
    
    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});