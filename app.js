// talks about underscore.js 
// can go to http://underscorejs.org/ and click "Annotated Source" at the top left to see the comments next to the code. 

// he also says lodash.js is another good library to look through.
// it is simlar to underscore.js but adds functionality
// http://lodash.com

var arr1 = [1, 2, 3];

var arr6 = _.map(arr1, function(item) { return item * 3 });
console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item) { return item % 2 === 0; });
console.log(arr7);
