"use strict";
/**
 * 
 * @param {string} num is a string containing digits
 * @returns {number} is a number
 */
function countDigits(num){
    if(num === ""){
        return 0;
    }else {
        return 1 + countDigits(num.substring(1));
    }
}
console.log(countDigits("12356432345676"));