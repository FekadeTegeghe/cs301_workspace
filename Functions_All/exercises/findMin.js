"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {number} is a number
 */
function findMin(arr){
    let min = 999;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin([3, 4, -3, 7, 9, -12, 8]));