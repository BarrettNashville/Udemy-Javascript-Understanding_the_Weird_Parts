// we can put a semicolon here in case another JS library loaded prior to this one doesn't close out all of its semicolons properly
;(function(global, $) {
    
    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        
        // return an object created by a call to a constructor so that you don't have to use the "new" keyword everytime you invoke Greetr
        return new Greetr.init(firstName, lastName, language);
    }
    
    // set up internal array hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];
    
    // we're using objects for greeting instead of arrays so we can reference them like so: greetigns['en']    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // for logging to console later
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }
    
    // make the prototype a new object
    Greetr.prototype = {
        
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName() + '!';
        },
        
        greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            if(console) {
                console.log(msg);
            }
            
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            
            return this;
        },
        
        setLang: function(lang) {
            this.language = lang;
            
            this.validate();
            
            return this;
        },
        
        //integrate jQuery by passing a jQuery-style selector to this function
        HTMLGreeting: function(selector, formal) {
            if(!$) {
                throw 'jQuery not loaded';
            }
            
            if(!selector) {
                throw 'Missing jQuery selector';
            }
            
            var msg;
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            // should probably add error checking on selector variable here eventually
            $(selector).html(msg);
            
            return this;
        }
        
    };
    
    // create a constructor function. use "self" to maintain a consistent reference to "this" in case you use an inner function that points to the global object
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;

        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
    }
    
    // now each object created with the Greetr.init constructor function has a prototype that points the same prototype: Greetr.prototype. Otherwise, each object created by the Greetr.init constructor would get its own unique prototype object
    Greetr.init.prototype = Greetr.prototype;
    
    // expose the Greetr object to the outside world; aka attach it to the global object. we're not going to worry about checking to see whether or not it exists. we also want to alias it with G$.
    global.Greetr = window.G$ = Greetr;
    
})(window, jQuery);