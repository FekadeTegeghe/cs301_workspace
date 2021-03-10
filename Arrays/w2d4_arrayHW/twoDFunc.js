"use strict";
/**
 * 
 * @param {array} twoDArr is an array
 * @returns {number} sum is sum of array elements
 */
function twoDSum(twoDArr){
    let sum = 0;
    for(let row = 0; row<twoDArr.length; row++){
        let colSum = 0;
        for(let col = 0; col < twoDArr[row].length; col++){
            sum += twoDArr[row][col];
            colSum += twoDArr[col][row];
            }
            return colSum;
    }
    return sum;
}
let twoDArr = [
    [1, 2, 3],  //6
    [4, 5, 6],   //15
    [7, 8, 9]     //24
];
twoDSum(twoDArr);
console.log(twoDSum(twoDArr));