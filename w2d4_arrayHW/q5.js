"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {array} rotated is an array too 
 */
function rotateRightByOne(arr){
    let rotated = [];
    for(let i =0; i<=arr.length + 1; i++){
    rotated[i] = arr.pop();
    }
    return rotated;
}
rotateRightByOne([3, 5, 4, 6, 9, 7]);
console.log(rotateRightByOne([3, 5, 4, 6, 9, 7]));