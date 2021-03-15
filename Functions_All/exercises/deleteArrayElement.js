"use strict";
/**
 * 
 * @param {array} arr is an array
 * @param {number} element is an element
 * @returns {array} is an array
 */
function deleteArrayElement(arr, element){
    let newArr = [];
        for(let i = 0; i<arr.length; i++){
        if(arr[i] !== element){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(deleteArrayElement([2, 3, 2, 4, 1, 5, 6, 7], 2));