"use strict";
let arr = [ 15, -3, 14, 10, 7 ];
let sliced = arr.slice(-3);
console.log(sliced);
console.log(arr);
console.log("---------------------------");
console.log(arr.splice(1, 3, 10, "awesome"));
console.log(arr);

let popped = arr.pop();
arr.unshift(popped);
console.log(arr);

console.log(arr.indexOf(14));
console.log(arr.lastIndexOf(14));
