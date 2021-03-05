"use strict";
let arr = ["I", "study", "JavaScript", "right", "now."];
arr.splice(0, 3, "Let's", "play");   //splice removes elements from 0 - 2 index, replaces with other two.
let removed = arr.splice(0, 2);
console.log(removed);
console.log(arr);