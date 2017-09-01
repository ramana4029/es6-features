// Array subclass
class MyArray extends Array {
    constructor(...args) { super(...args); }
}


var arr = new MyArray();
arr[1] = 12;
console.log(arr.length)