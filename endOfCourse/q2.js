"use strict";
/**
 * 
 * @param {array} arr is an array 
 * @param {number} target is a number
 * @returns {number} i is a number
 */
function sumTarget(arr, target){
    let indices = [];
    for(let i =0; i < arr.length; i++){
        for(let j =i + 1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                indices[0] = i;
                indices[1] =j; 
                return indices;
            }
        }
    } 
}
console.log(sumTarget([1, 3, 4, 5, 7], 7));