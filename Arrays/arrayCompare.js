"use strict";

/**
 * 
 * @param {array} firstArray sss
 * @param {array} secondArray ff
 * @return {boolean} true
 */
function compareArrays(firstArray, secondArray){
    if(firstArray.length !== secondArray.length){
        return false;
    }else {
        for(let i = 0; i<firstArray.length; i++){
            if(firstArray[i] !== secondArray[i]){
                return false;
            }
        }
    }
    return true;
}
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(compareArrays(arr1, arr2));
