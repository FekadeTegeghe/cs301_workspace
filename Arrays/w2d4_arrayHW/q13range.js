"use strict";
/**
 * 
 * @param {array} arr is array
 * @param {number} value1 is a number
 * @param {number} value2 is anumber
 * @returns {array} arrRange is an array
 */
function filterRange(arr, value1, value2) {
    let arrRange = [];
    let j = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i] >= value1 && arr[i] <=value2){
            arrRange[j] = arr[i];
            j++;
        }
    }
    return arrRange;
}
let arr = [ 53, 23, 34, 43, 13, 17 ];
let arr1 = [-13, 15, -3, 31, 28,14,32, 10, 7];
filterRange(arr, 25, 50);
console.log(filterRange(arr, 25, 50));
console.log(filterRange(arr1, -3, 20));