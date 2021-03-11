"use strict";
/**
 * 
 * @param {number} num is number to be reversed.
 * @returns {number} revised is a number
 */
/*function reverseDigits(num){
    let reversed = "";
    while(num>0){
        let lastDigit = num%10;
        reversed = reversed + lastDigit;
        num = Math.floor(num/10);
    }
    console.log(reversed); //123 = 1*10^2 + 2*10^1 + 3*10^0
}
reverseDigits(234567);  */
//version II
/**
 * 
 * @param {number} num is a number
 * @returns {number} revised is number
 */
function reverseDigits(num){
    let reversed = 0;
    while(num>0){
        let lastDigit = num%10;
        reversed = reversed*10 + lastDigit;
        num = Math.floor(num/10);
    }
    return reversed; //123 = 1*10^2 + 2*10^1 + 3*10^0
}
console.log(reverseDigits(234567));  