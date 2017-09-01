
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}


//Iterating over a Map
let map = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of map) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of map) {
  console.log(value);
}
// 1
// 2
// 3

//The for...in loop will iterate over all enumerable properties of an object.
//The for...of syntax is specific to collections, rather than all objects