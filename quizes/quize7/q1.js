"use strict";
/**
 * 
 * @param {array} arr is an array 
 * @returns {number} is a number
 */
function secondLargest(arr){
    let first = arr[0];
    let second = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > first){
           second = first;
           first = arr[i];
        }else if(arr[i] > second){
            second = arr[i];
        }
    }
    return second;
}

secondLargest([23, -3, 25, -10, 34, 37]);
console.log(secondLargest([23, -3, 25, -10, 34, 37]));