"use strict";
/**
 * 
 * @param {array} arr1 is an array to be compared
 * @param {array} arr2 is another array to be compared.
 * @returns {boolean} true is a boolean
 */
function isArrayEqual(arr1, arr2){
    if(arr1.length !== arr1.length) return false;
    for(let j = 0; j<arr1.length; j++){
        if(arr1[j] !== arr2[j]) return false;
    }
    return true;
}

/**
 * 
 * @param {array} arr is an array
 * @returns {number} sum result of addition of first and last elements of the array 
 */
function addend(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;

}
module.exports= {isArrayEqual, addend}