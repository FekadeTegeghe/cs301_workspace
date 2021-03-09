"use strict";
/**
 * 
 * @param {number} num1 is a number 
 * @param {number} num2 is a number 
 * @returns {number} result is a number
 */
function multiply(num1, num2){
    let result = 0;
    for(let i = 0; i<num1; i++){
        result = result + num2;   
    }
    return result;
}
console.log(multiply(3, 5));