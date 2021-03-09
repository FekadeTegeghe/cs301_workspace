"use strict";
/**
 * 
 * @param {array} arr is an array
 * @param {number} index is a number 
 * @returns {array} leftOver is an array
 */
function deleteArrayElement(arr, index){
    let leftOver = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[index]){  // (i === index =>continue;)
            leftOver[j] = arr[i];
            j++;
        }
    }
    return leftOver;
}
let arr = [ 23, -3, 25, 34, 37 ];
deleteArrayElement(arr);
console.log(deleteArrayElement(arr, 3));
