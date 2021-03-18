"use strict";
/**
 * 
 * @param {number} num is a number
 * @returns {array}factors is an array
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
  console.log(getFactors(15));