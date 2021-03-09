"use strict";
//generate random #s and sort
/**
 * 
 * @param {array} arr is an array
 * @returns {number} counter is a number
 */
function spliceBetween(arr){
    let j = 0;
    let counter = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] >=20 && arr[i] <= 40){
            if(counter ===0){
                j =i;
            }
          counter++;  
        }
    }
    //return j, counter;
    arr.splice(j, counter);
    return arr;
}
// if the array is not sorted, need arises to sort using (a, b)=>b-a
let arr =[10, 13, 17, 18, 22, 27, 31, 38, 43, 47, 49, 53, 56];
console.log(arr.splice(4, 4));
console.log(spliceBetween(arr));