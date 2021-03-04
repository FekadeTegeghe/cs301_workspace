/* eslint-disable valid-jsdoc */
"use strict";
/**
 * 
 * @param {number} num1 is a number to compute least common multiple
 * @param {number} num2 is a number to compute least common multiple
 */
function computeHCF(num1, num2) {
    computeGCD();
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(num2) {    //this is equivalent to while(num2 !==0). We can also start with num1.
      var value = num2;
      num2 = num1 % num2;
      num1 = value;
    }
    return num1;
  }
  console.log(computeHCF(15, 35));

  //Using function Expression
  /**
   * 
   * @param {number} value1 this is a value we should compute its GCD
   * @param {number} value2 this is a value we should compute its GCD
   */
  let computeGCD = function(value1, value2){
    while(value1) {    
        var largest = value1;
        value1 = value1 % value2;
        value2 = largest;
      }
      return value2;
    };
    console.log(computeHCF(315, 35));
  