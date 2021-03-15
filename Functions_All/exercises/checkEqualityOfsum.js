"use strict";
/**
 * 
 * @param {array} arr1  is an array
 * @param {array} arr2 is an array
 * @returns {boolean} is boolean
 */
function isSumEqual(arr1, arr2){
    return (sumArray1(arr1) === sumArray1(arr2)); 
}
let arr1 = [2, 3, 7, 4, 8];    //24
let arr2 = [5, 4, 6, 9];         //15+12 = 27
console.log(isSumEqual(arr1, arr2));
/**
 * 
 * @param {array} arr is an array
 * @returns {number} is a number
 */
function sumArray1(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
