"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {number} is a number
 */
function findSecondLargest(arr){
    let largest = arr[0];
    let secondLargest = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(findSecondLargest([11, 23, 21, 15, 17, 25, 26]));  //25