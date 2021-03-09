"use strict";
/**
 *
 * @param {array} arr1 is an array
 * @param {array} arr2 is an array
 * @returns {boolean} true is a boolean
 */
function areArraysEqual(arr1, arr2) {   //can be done with one loop after sorting
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        break;
      }
    }
    return true;
  }
  return false;
}

let arr1 = [1, 2, 5],
  arr2 = [5, 1, 2];
//areArraysEqual(arr1, arr2);
console.log(areArraysEqual(arr1, arr2));
