"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {array} rotated is an array too. 
 */
function rotateLeftByOne(arr){
    let rotated = [];
    for(let i = 0; i < arr.length; i++){
    rotated[i] = arr[i+1];
    }
    
       return rotated;
    }
rotateLeftByOne([2, 3, 5, 8, 6, 5]);
console.log(rotateLeftByOne([2, 3, 5, 8, 6, 5]));