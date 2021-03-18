"use strict";
/**
 *
 * @param {number} num is a number
 * @returns {number} is a number
 */
 function largestPrimeFactor(num) {
    let factors = getFactors(num);
  
    let primFactors = primeElements(factors);
  
    let largestPrime = findLargest(primFactors);
  
    return largestPrime;
  }
  console.log(largestPrimeFactor(15));

/**
 *
 * @param {number} num is a number
 * @returns {array} factors is an array
 */
function getFactors(num) {
  let factors = [];

  let j = 0;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      factors[j] = i;

      j++;
    }
  }

  return factors;
}
/**
 *
 * @param {array} array is an array
 * @returns {array} is an array
 */
 function primeElements(array) {
    let primes = [];
  
    let jjj = 2;
  
    let kkk = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % jjj === 0) {
        continue;
      }
      
      primes[kkk] = array[i];
      jjj++;
      kkk++;
    }
  
    return primes;
  }
  primeElements();
/**
 *
 * @param {array} arr is an array
 * @returns {number} is a number
 */
function findLargest(arr) {
  let largest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

