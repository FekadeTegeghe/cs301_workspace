"use strict";
// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
/**
 * 
 * @param {array} arr is an array
 * @returns {array} is an array
 */
function uniqueInteger(arr) {
    arr.sort();
    let distinctArr = [];
    distinctArr.push(arr[0]);
    for(let i = 1; i<arr.length; i++){
        if(arr[i] !== arr[i-1]){
            distinctArr.push(arr[i]);
        }
    }
    return distinctArr;
}
console.log(uniqueInteger([2, 3, 2, 4, 12, 2, 14, 16]));