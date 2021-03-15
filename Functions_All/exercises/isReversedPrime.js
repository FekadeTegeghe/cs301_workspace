"use strict";
/**
 * 
 * @param {number} num is a number
 * @returns {number} is a number
 */
function isPrime(num){
    for(let i = 2; i<num; i++){
        if(num%i ===0){
            return false;
        }
    }
    return true;
}
/**
 * 
 * @param {number} num is a number
 * @returns {number} is a number
 */
function reverse(num){
    Math.abs(num);
    let reversed = "";
       while(num>0){
            let lastDigit = num%10;
            reversed = reversed + lastDigit;
            num = Math.floor(num/10);    //123%10=3
    }
    return Number(reversed);
}
/**
 * 
 * @param {number} num is a number
 * @returns {boolean} is boolean
 */
function isReversedPrime(num){
    let reversed = reverse(num);
    let result = isPrime(reversed);
    return result;
}
console.log(isReversedPrime(32));
console.log(isReversedPrime(53));
console.log(isReversedPrime(91));