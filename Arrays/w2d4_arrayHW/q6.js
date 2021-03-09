"use strict";
/**
 * 
 * @param {array} arr is an array
 * @param {number} round is the number of rounds of rotation
 * @returns {array} rotated is a rotated array
 */
function rotateRight(arr, round) {
    let j=0;
    let rotated =[];
    for (let i = round; i < arr.length; i++){
        rotated[j] = arr[i];
        j++;
    }
    for (let i = 0; i < round; i++){
        rotated[j] = arr[i];
        j++;
    }
    return rotated;
}
let arr = [4, 5, 3, 6, 7];
rotateRight(arr, 3);
console.log(rotateRight(arr, 1));
console.log(rotateRight(arr, 2));
console.log(rotateRight(arr, 3));
console.log(rotateRight(arr, 4));
