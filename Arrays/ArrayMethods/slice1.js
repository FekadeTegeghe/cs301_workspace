"use strict";
let test = ["t", "e", "s", "t"];  //executes subarray including 1st and but not last element
console.log(test.slice(1, 3));    //e, s
console.log(test.slice(2, 3));  //s
console.log(test.slice(-2));  //s  starts from position -2 moves forward (not backward)
console.log(test.slice(-3));   //e, s, t