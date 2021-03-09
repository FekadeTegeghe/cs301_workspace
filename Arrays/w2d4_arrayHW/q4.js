"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {array} rotated is an array too. 
 */
function rotateLeftByOne(arr){
    
    let first = arr[0];
    for(let i =0;i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length -1] = first;
    return arr;
}
let arr = [2, 3, 5, 8, 6, 5];
rotateLeftByOne(arr);
console.log(rotateLeftByOne(arr));