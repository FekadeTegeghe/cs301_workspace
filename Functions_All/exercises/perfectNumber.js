"use strict";
/**
 * 
 * @param {number} num is a number 
 * @returns {boolean} is a bool
 */
function isPerfectNumber(num){
    let sumFactors = 0;
    for(let i = 1; i < num; i++){
        if(num%i === 0){
            sumFactors += i;
        }
    }
    return sumFactors === num;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(10));
console.log(isPerfectNumber(28));