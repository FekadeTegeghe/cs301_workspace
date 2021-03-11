"use strict";
/**
 * 
 * @param {string} num is a string containing digits
 * @returns {number} is a number
 */
/*function countDigits(num){
    if(num === ""){
        return 0;
    }else {
        return 1 + countDigits(num.substring(1));
    }
}
console.log(countDigits("12356432345676"));  */
/**
 * 
 * @param {number} num is a number
 * @returns {number} is a number
 */
function countDigits(num){
    num = Math.abs(num);
    if(num <=9){
        return 1;
    }else {
        return 1 + countDigits(Math.floor(num/10));
    }
}
console.log(countDigits(12356432345676));