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
/**
 *
 * @param {array} arr11 is an array
 * @param {number} num10 is a number
 * @returns {array} is an array
 */
 function enhancedIncludes(arr11, num10) {
    let arr12 = [];
    let count = 0;
    for (let i = 0; i < arr11.length; i++) {
      if (arr11[i] == num10) {
        count = count + 1;
        if (count == 1) {
          arr12.push(true);
          arr12.push(i);
        } else if (count === 2) {
          arr12.push(i);
        } else if(count > 2){
          arr12.pop();
          arr12.push(i);
        }
      }
      
    }
    return arr12;
  }
  
  console.log(enhancedIncludes([2, 3, 7, 3, 3, 9, 3, 3], 3)); //[true, 1, 5];
  