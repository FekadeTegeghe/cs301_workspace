"use strict";
/**
 * 
 * @param {array} arr is an array 
 * @param {number} value is a number
 * @returns {boolean} true is a boolean
 */
function EnhancedIncludes(arr, value){
    let returned = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === value){
            return true;
        }
    if(value === arr[1]){
        return true;
    } 
    if(value === arr[arr.length - 1]){
        return true;
    }
    return -1;
    }
}
EnhancedIncludes([23, 43, 35, 12], 43);
console.log(EnhancedIncludes([23, 43, 35, 12], 43));