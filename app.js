console.log(this);
//points to global object, in this case the window object

function a() {
    console.log(this);
}

a();
//also points to global object, in this case the window object

var b = function() {
    console.log(this);
}

b();
//also points to global object, in this case the window object

function c() {
    console.log(this);
    this.newvariable = 'hello';
}

c();
// since "this" is the global object, newvariable lives at the global level

console.log(newvariable);

// what about an object method

var d = {
    name: 'The d object',
    log: function() { 
        this.name = 'Updated d object';
        // the line above changes the name property of the d object
        console.log(this);
    }
}

d.log();

// when a function is a method attached to an object, the "this" keyword becomes the object in which the method resides

/////

// a lot of programmers feel like this next aspect of the language is a bug

var e = {
    name: 'The e object',
    log: function() { 
        this.name = 'Updated e object';
        console.log(this);
        
        var setname = function(newname) {
            this.name = newname;
            // most people would expect "this" to point to e
            // however it points to the global object
            // in the console you can open the window object
            // and you'll see the name property set to what's below
        }
        setname('Updated the e object again');
        console.log(this);
    }
}

e.log();

// solving this problem by setting a variable often named "self" (sometimes called "that"):

var f = {
    name: 'The f object',
    log: function() { 
        var self = this;
    
        self.name = 'Updated f object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;

        }
        setname('Updated the f object again');
        console.log(self);
    }
}

f.log();

// he said the "let" keyword being introduced in ES6 will also solve this problem but said he would explain it later. 
