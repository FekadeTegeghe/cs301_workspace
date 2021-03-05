"use strict";
/**
 * 
 * @param {array} arr is an array
 * @return {number} sum is a number
 */
function addend(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
addend([3, 4, 6, 2, 7]);
console.log(addend([3, 4, 6, 2, 7]));