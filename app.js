//If you are using two library files in your project, a lib1.js and a lib2.js and each has code that sets libraryName = "Lib1" or "Lib2", then the last one loaded wins. However, if you don't want to override a variable if it is already set, then you can use the or operator trick like so:

window.libraryName = window.libraryName || "Lib 2";

// Usually libraries use very few global values, so if you load a library and can't use it, then you know you've probably overridden a variable name used in that library accidentally. 