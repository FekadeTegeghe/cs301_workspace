"use strict";
let val1 = 5;
let val2 = 7;
console.log(val1, val2);
swap1(val1, val2);
console.log(val1, val2);
let arr = [1, 2, 3];
console.log(arr);
swap2(arr, 0, 2);
console.log(arr);
/**
 * 
 * @param {number} val1 is a number
 * @param {number} val2 is a number
 * @returns {number} value is a number
 */
function swap1(val1, val2){
    let temp = val1;
    val1 = val2;
    val2 = temp;
}
/**
 * 
 * @param {array} arr is an array
 * @param {number} i is a number
 * @param {numbr} j is a number
 * @returns{number} number
 * 
 *  */
function swap2(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j]= temp;

}