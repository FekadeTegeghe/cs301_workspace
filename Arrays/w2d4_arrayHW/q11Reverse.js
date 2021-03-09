"use strict";
let arr = ["I", "study", "JavaScript", "right", "now."];
/**
 * 
 * @param {array} arr is an array
 * @returns {array} arr is also a reversed array
 */
function reverse(arr){
    let reversed = [];
    let j = 0; 
    for(let i = arr.length - 1; i >=0; i--){
        reversed[j] = arr[i];
        j++;
    }
    return reversed;

}
let arr1 = [43, 23, 35, 65, 37, 61];
console.log(reverse(arr));
console.log(reverse(arr1));