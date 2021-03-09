"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {number} count is a number
 */
function countDuplicate(arr){   //sort first and can be done with one loop
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let value = arr[i];
        for(let j =i + 1; j<arr.length; j++){
            if(value === arr[j]){
                count++;
             }
        }
    }
    return count;
}
let arr = [1, 2, 2, 1, 3, 2, 3, 3, 5, 5];   //uniques = 1, 2, 2, 2, 3, 3, 3, 5
//countDuplicate(arr);
console.log(countDuplicate(arr));