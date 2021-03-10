"use strict";
/**
 * 
 * @param {number} num is number
 * @param {number} pow is a number 
 * @returns {number} is a number
 */
function power(num, pow){
    if(pow === 1){
        return num;
    }else {
        return num*power(num, pow -1);
    }
}
console.log(power(5, 3));