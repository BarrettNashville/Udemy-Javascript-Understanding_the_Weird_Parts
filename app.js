// method chainging: calling one method after another, and each method affects the parent object. 
// So obj.method1().method2() where both methods end up with a 'this' variable pointing at 'obj'

// the only thing you have to do to make methods chainable is to "return this;"
var q = $("ul.people").addClass("newclass").removeClass("people");
console.log(q);