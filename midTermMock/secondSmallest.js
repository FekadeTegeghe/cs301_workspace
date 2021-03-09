"use strict";
/**
 * 
 * @param {number} num1 is a number 
 * @param {number} num2 is a number 
 * @param {number} num3 is a number
 * @returns {number} num3 is a number
 */
function secondSmallest(num1, num2, num3){
    if(num1 < num2 && num1 > num3 || num1 < num3 && num1 > num2){
        return num1;
    }else if(num2 < num3 && num2 > num1 || num2 < num1 && num2 > num3){
        return num2;
    }else{
        return num3;
    }
}
console.log(secondSmallest(3, 6, 1));