"use strict";
/**
 * @param {array} arr1 is an array
 * @param {array} arr2 is an array
 * @returns {array} sorted is an array
 */
function merge(arr1, arr2){
    let sorted = [];
    let sorted1 = arr1.sort();
    let sorted2 = arr2.sort();
    let joined = sorted1.concat(sorted2);
        sorted = joined.sort();
    return sorted;
}
merge([23, 34, 43, 26, 28, 36], [54, 14, 27, 37, 25, 17]);
console.log(merge([23, 34, 43, 26, 28, 36], [54, 14, 27, 37, 25, 17]));
