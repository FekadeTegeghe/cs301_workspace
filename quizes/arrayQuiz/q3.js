"use strict";
/**
 * 
 * @param {array} arr1 is an array
 * @param {array} arr2 is an array
 * @returns {array} sum is array
 */
function sumArrays(arr1, arr2){
    let sum = [];
    if(arr1.length === arr2.length){
        for(let i = 0; i<arr1.length; i++){
            for(let j = i; j<=i; j++){
                sum[i] = arr1[i] + arr2[j];
            }
        }
    }
    return sum;
}
sumArrays([1,2,3,4,5] , [5,4,3,2,1]);
console.log(sumArrays([1,2,3,4,5] , [5,4,3,2,1]));