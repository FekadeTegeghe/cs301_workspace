"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {array} reversed is also an array. 
 */
function rev(arr){
    let reversed = [];
    reversed = arr.reverse();
    return reversed;
}
rev(["Quick", "Brown", "Fox"]);
console.log(rev(["Quick", "Brown", "Fox"]));