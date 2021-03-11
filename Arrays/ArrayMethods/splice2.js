"use strict";
let arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language");  //go to index 2, insert complex and language at position, push JS
console.log(arr);

let arr1 = [1, 2, 5];
arr1.splice(-1, 0, 3, 4);  //go to last element, insert 3& 4, push last element to the end.
console.log(arr1);
console.log(arr1.splice(3));
console.log(arr1);

