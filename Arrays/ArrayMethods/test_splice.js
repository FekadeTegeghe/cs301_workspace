"use strict";
let arr = ["I", "study", "JavaScript", "right", "now."];
/**
 * 
 * @param {array} arr is an array
 * @returns {array} arr is also a reversed array
 */
// function reverse(arr){
//     let reversed = [];
//     let j = 0; 
//     for(let i = arr.length - 1; i >=0; i--){
//         reversed[j] = arr.slice(arr.length - 1 - j);
//         j++;
//     }
//     return reversed;

// }
// console.log(reverse(arr));
console.log(arr.slice(3, 1));
console.log(arr.slice(4, 1));
console.log(arr.slice(5, 1));

//console.log(arr.slice(-1).concat(arr.splice(-2, 1), arr.splice(-3, 1), arr.splice(-4, 1)));