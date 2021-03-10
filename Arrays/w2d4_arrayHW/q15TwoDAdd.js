"use strict";
/**
 * 
 * @param {array} arr1 is a two D array
 * @param {array} arr2 is a two D array
 * @returns {array} sum is a two D array
 */
function twoDArrayAdd(arr1, arr2){
    let result = [];
    
    for(let i =0; i<arr1.length; i++){
        let row = [];
        for(let j =0; j < arr1[i].length; j++){
            row.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(row);
    }
    
    return result;
}
let arr1 = [[1, 2], [2, 3]];
let arr2 = [[3, 1], [1, 3]];
twoDArrayAdd(arr1, arr2);
console.log(twoDArrayAdd(arr1, arr2));
