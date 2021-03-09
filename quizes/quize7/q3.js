"use strict";
/**
 * 
 * @param {array} arr is an array
 * @param {number} index is an index
 * @returns {array} is an array
 */
function deleteIndexed(arr, index){   //continue can help
    for(let i = 0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) === index){ 
            arr.splice(index, 1);
        }
    }
    return arr;
    //arr.splice(index, 1);
    //console.log(arr.splice(index, 1));
    //return arr;
}
let arr = [ 23, -3, 25, -10, 34, 37 ];
//deleteIndexed(arr);
console.log(deleteIndexed(arr, 4));