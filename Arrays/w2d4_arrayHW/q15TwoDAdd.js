"use strict";
/**
 * 
 * @param {array} arr1 is a two D array
 * @param {array} arr2 is a two D array
 * @returns {array} sum is a two D array
 */
function twoDArrayAdd(arr1, arr2){
    let par1, par2, i, j;
    
    for(i =0; i<arr1.length; i++){
        for(j =0; j < arr1[i].length; j++){
            return arr1[i][j];
        }
    }
    
    for( par1=0; par1<arr2.length; par1++){
        for(par2 = 0; par2 < arr2.length; par2++){
            return arr2[par1][par2];
        }
    }
    return arr1[i][j] + arr2[par1][par2];
}
let arr1 = [[1, 2], [2, 3]];
let arr2 = [[3, 1], [1, 3]];
twoDArrayAdd(arr1, arr2);
console.log(twoDArrayAdd(arr1, arr2));
