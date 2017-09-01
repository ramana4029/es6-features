//Let Scoping rules

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

varTest();

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

letTest();



//Cleaner code in inner functions
//Ex: for loop using a 
// SyntaxError for redeclaration.
//When used inside a block, let limits the variable's scope to that block


//Constants are block-scoped, much like variables defined using the let statement. 
//The value of a constant cannot change through re-assignment, and it can't be redeclared.
// define myconst as a constant and give it the value 7
const myconst = 7;

// this will throw an error
//myconst = 20;
