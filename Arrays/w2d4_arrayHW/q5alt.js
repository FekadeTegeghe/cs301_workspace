"use strict";
/**
 * 
 * @param {*} arr 
 */
function rotateRight(arr){
    let last = arr[arr.length - 1];
    for(let i = arr.length - 1; i>=0; i--){
        arr[i] = arr[i-1];

    }
}