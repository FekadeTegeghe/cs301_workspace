"use strict";
/**
 * 
 * @param {array} arr is array 
 * @returns {array} filtered is an array
 */
function filterNegative(arr){
    let filtered = [];
    for(let num of arr){
        if(num > 0){
            if(num < 0){
                filtered.push(num);
            }
        }
    }
    return filtered;
}
console.log(filterNegative([9, -3, 2, 4, 3, 6]));