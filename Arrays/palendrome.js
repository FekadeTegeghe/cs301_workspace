"use strict";
/**
 * 
 * @param {array} arr is an array
 * @return {boolean} false
 */
function isPalendrome(arr){
    let copy = [];
    for(let item of arr){
        copy.push(item); 
    }
    for(let i = 0; i<arr.length; i++){
        if(arr.shift() !== copy.pop()){
            return false;
        }
    }
    return true;
}
console.log(isPalendrome([1, 2, 2, 1]));
console.log(isPalendrome([1, 2, 3, 2]));
console.log(isPalendrome([1, 1, 2, 2, 1, 1]));
console.log(isPalendrome([3, 2, 2, 3, 3]));
