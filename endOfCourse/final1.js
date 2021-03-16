"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {boolean} is a bool
 */
function isSumBalanced(arr){
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i<arr.length; i++){
        if(2*i +1 < arr.length) oddSum += arr[2*i + 1];
        if(2*i < arr.length) evenSum += arr[2*i];
    }
    if(oddSum !== evenSum){
        return false;
    }
    return true;
}
console.log(isSumBalanced([2, 3, 7, 4, 5, 9]));
console.log(isSumBalanced([2, 3, 7, 6, 4, 9, 5]));    //2+7+5+4 = 3+6+9