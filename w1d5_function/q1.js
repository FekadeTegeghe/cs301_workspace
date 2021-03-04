/* eslint-disable valid-jsdoc */
"use strict";
/**
 * 
 * @param {number} value is a number to be checked whether it is prime or not.
 * @param {boolean} return value ie true if value is prime or false if not prime.
 * 
 */
function isPrime(value) {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
console.log(isPrime(53));
console.log(isPrime(51));
console.log(isPrime(37));
console.log(isPrime(23));
