"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {number} is a number
 */
function addOddIndexValues(arr){
    let sum = 0;
    for(let i = 1; i<arr.length; i+=2){
        sum += arr[i];
    }
    return sum;
}
console.log(addOddIndexValues([2, -3, 4, 1, 2, 6, 7, 9, 13]));