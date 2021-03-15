"use strict";
/**
 * 
 * @param {array} arr1 is an array
 * @param {array} arr2 is an array
 * @returns {boolean} is a bool
 */
function isSumOfArraysEqual(arr1, arr2){
   let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i<arr1.length; i++){
        sum1 += arr1[i];
    }
    for(let j = 0; j<arr2.length; j++){
        sum2 += arr2[j];
    }
    return (sum1 === sum2);
}
console.log(isSumOfArraysEqual([2, 3, 4, 5], [9, 5]));