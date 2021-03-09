/* eslint-disable valid-jsdoc */
"use strict";
console.log(compute(add, 3, 3));

let compute = function(add, num1, num2){
    add(num1, num2);
    // return num1 + num2; 
};
/**
 * 
 * @param {number} addend1 
 * @param {number} addend2 
 */
function add(addend1, addend2){
    return addend1+ addend2;
}
compute(add, 3, 3);