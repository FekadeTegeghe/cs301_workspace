"use strict";
/**
 * 
 * @param {array} arr is an array 
 * @returns {number} frequent is a  number
 */
function mostFrequent(arr){
    let counter =0;
    let frequent;
    for(let i = 0; i < arr.length; i++){
        let update = 0;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                update++;
            }   
        }
        if(update > counter){
            counter = update;
            frequent = arr[i];
        }
    }
    return frequent;
}
let arr = [1, 2, 3, 2, 2, 3, 2, 3, 2,3];
console.log(mostFrequent(arr));