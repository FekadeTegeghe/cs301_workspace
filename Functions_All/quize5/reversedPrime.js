"use strict";
/**
 * 
 * @param {number} num is a number
 * @returns {number} reversedDigits is a number 
 */
function reverse(num){
    let reversedDigits = "";
    while(num>0){
        let lastDigit = num%10;
        reversedDigits = reversedDigits + lastDigit;
        num = Math.floor(num/10); 
    }
    return Number(reversedDigits);
}
//console.log(reverse(123));
/**
 * 
 * @param {number} num is a number
 * @returns {boolean} true is a boolean
 */
function isPrime(num){
    for(let i = 2; i<num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}
//console.log(isPrime(7));
/**
 * 
 * @param {number} num is a number
 * @returns {number} result is a number 
 */
function isReversedPrime(num){
    let reversedNum = reverse(num);
    let result =isPrime(reversedNum);
    return result;
}
console.log(isReversedPrime(35));
console.log(isReversedPrime(7));
console.log(isReversedPrime(91));
console.log(isReversedPrime(23));
