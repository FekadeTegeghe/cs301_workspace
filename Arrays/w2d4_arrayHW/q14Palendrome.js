"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {boolean} true 
 */
 function isPalendrome(arr){
    for(let i = 0; i < arr.length; i++){
      for(let j =0; j < arr[i].length; j++){
        if(arr[i].charAt[j] !== arr[i].charAt[arr[i].length - 1 -j]){
          return false;
        }
      }
    }
    return true;
 }


 let arr = ["moon", "noon", "madam", "good", "abba"];
 isPalendrome(arr);
 console.log(isPalendrome(arr[0]));
 console.log(isPalendrome(arr[1]));
 console.log(isPalendrome(arr[3]));
 console.log(isPalendrome(arr[4]));
 console.log(isPalendrome(arr[5]));