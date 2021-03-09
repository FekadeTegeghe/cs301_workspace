"use strict";
/**
 * 
 * @param {array} arr is an array 
 * @returns {number} second is a number
 */
function secondSmallest(arr){
    let first = arr[0];
    let second = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < first){
            second = first;
            first = arr[i];
        }else if(arr[i] < second){
            second = arr[i];
        }
    }
    return second;
}

let arr = [2, 3, 7, -3, -5, 11, 13, 9];    
secondSmallest(arr);
console.log(secondSmallest(arr));       //-3