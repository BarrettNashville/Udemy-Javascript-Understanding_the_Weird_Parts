(function(global, $) {
    
    var Greetr = function(firstname, lastname, language) {
        
        // return an object created by a call to a constructor so that you don't have to use the "new" keyword everytime you invoke Greetr
        return new Greetr.init(firstname, lastname, language);
    }
    
    // make the prototype a new empty object
    Greetr.prototype = {};
    
    // create a constructor function. use "self" to maintain a consistent reference to "this" in case you use an inner function that points to the global object
    Greetr.init = function(firstname, lastname, language) {
        
        var self = this;

        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }
    
    // now each object created with the Greetr.init constructor function has a prototype that points the same prototype: Greetr.prototype. Otherwise, each object created by the Greetr.init constructor would get its own unique prototype object
    Greetr.init.prototype = Greetr.prototype;
    
    // expose the Greetr object to the outside world; aka attach it to the global object. we're not going to worry about checking to see whether or not it exists. we also want to alias it with G$.
    global.Greetr = window.G$ = Greetr;
    
})(window, jQuery);