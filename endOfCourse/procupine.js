"use strict";
/**
 *
 * @param {number} num is a number
 * @returns {number} is a number
 */
function isProcupine(num) {
  let firstPrime = num + 1;
  while (true) {
    if (isPrime(firstPrime) && firstPrime % 10 === 9) {
      let nextPrime = firstPrime + 1;
      while (true) {
        if (isprime(nextPrime)) {
          if (nextPrime % 10 === 9) {
            return firstPrime;
          } else {
            firstPrime = nextPrime;
            break;
          }
        }
        nextPrime++;
      }
    }
    firstPrime++;
  }
}
let num = 139;
console.log(isProcupine(num));
/**
 *
 * @param {number} num is a number
 * @returns {boolean} is a boolean
 */
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return false;
}
