"use strict";
/**
 * 
 * @param {array} arr is an array
 * @param {number} round is the number of rounds of rotation
 * @returns {array} rotated is a rotated array
 */
 function rotateNRight(arr, round){
    for(let i = 0 ; i< round; i++){
    let elemen = arr.pop();
    arr.unshift(elemen);
    
    }
    return arr;
    
   }
   let arr =[23, 34, 43, 13, 17, 53];
   //rotateNRight(arr, 1);
   console.log(rotateNRight(arr, 3));
