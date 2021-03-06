"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {number} min is a number
 */
function minFind(arr){
    let min = arr[0];
    for(let i =0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;

}
minFind([2, 3, -1, -4, 3, 2, 1]);
console.log(minFind([2, 3, -1, -4, 3, 2, 1]));