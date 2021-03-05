"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {number} median is a number
 */
function getMiddle(arr){
    arr = arr.sort();
    console.log(arr);
    let median;
    for(let i = 0; i< arr.length; i++){
        if(arr.length%2 !==0){
            median = arr[Math.floor(arr.length/2)];
        }
        if(arr.length%2 === 0){
            median = (arr[(arr.length/2)-1] + arr[arr.length/2])/2;
        }
    }
    return median;
}

getMiddle([23, 43, 34, 53, 21, 27]);
console.log(getMiddle([23, 43, 34, 53, 21, 27]));