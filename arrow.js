/*
Arrows are a function shorthand using the => syntax

Basic Syntax

(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// A function with no parameters should be written with a pair of parentheses.
() => { statements }


// Rest parameters and default parameters are supported
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Destructuring within the parameter list is also supported
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  
// 6

*/

var elements = [
  'salesforce',
  'salesforcecrm',
  'hubspot',
  'marketo'
];

var res1 = elements.map(function(element) {
  return element.length;
}); // [ 10, 13, 7, 7 ]
console.log(res1);

var res2 = elements.map((element) => {
  return element.length;
}); // [ 10, 13, 7, 7 ]
console.log(res2);

var res3 = elements.map(element => element.length); // [ 10, 13, 7, 7 ]
console.log(res3);
