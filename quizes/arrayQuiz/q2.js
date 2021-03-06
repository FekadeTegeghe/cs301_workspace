"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {number} sum is a number
 */
function sumOddIndicesValues(arr){
    let sum = 0;
    for(let i =0; i<arr.length; i++){   //start from i = 1 and jump by two another way
    if(i%2!==0){
        sum+=arr[i];
    }
    }
    return sum;
}
sumOddIndicesValues([2, 3, -1, -4, 3, 2, 1]);
console.log(sumOddIndicesValues([2, 3, -1, -4, 3, 2, 1]));    //3-4 +2=1
console.log(sumOddIndicesValues([3, 1, 5, 4, 7, 2]));   //1+4+2=7
console.log(sumOddIndicesValues([1,3,4,6,4,7,2]));   //3+6+7 = 16
console.log(sumOddIndicesValues( [5,4,3,2,1]));