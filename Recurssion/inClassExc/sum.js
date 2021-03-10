"use strict";
//add the first n integers greater or equal to 0'
/**
 * 
 * @param {number} num is a number
 * @returns {number} is a num
 */
function recursiveSum(num){
    if(num === 0){
        return 0;
    }else {
        return num + recursiveSum(num - 1);
    }
}
console.log(recursiveSum(10));