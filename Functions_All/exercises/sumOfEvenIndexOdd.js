"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {boolean} is a bool
 */
function isSumOfEvenIndexOdd(arr){
    let sumEvenIndex =0;
    for(let i = 0; i<arr.length; i+=2){
        sumEvenIndex+=arr[i];
    }
    return sumEvenIndex%2 !== 0;
}
console.log(isSumOfEvenIndexOdd([12, 9, 3, 7, 11, 10, 14, 19]));  //12+3+11+14 = 40
console.log(isSumOfEvenIndexOdd([9, 3, 7, 11, 19]));    //35
console.log(isSumOfEvenIndexOdd([12, 9, 3, 10, 14, 19]));    //29