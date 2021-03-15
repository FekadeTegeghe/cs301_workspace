"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {boolean} is a boolean
 */
function sumPrimeIndices(arr){    //if odd indexed elements are odd return true
    if(arr.length ===0 ){
        return false;
    }
    for(let i = 1; i<arr.length; i+=2){   //
        if(arr[i]%2 === 0){
            return false;
        }
    }
    return true;
}
let arr = [];
console.log(sumPrimeIndices(arr));
console.log(sumPrimeIndices([2,3,4,5,7,8]));
console.log(sumPrimeIndices([3,9,9,5,5,7,9]));