"use strict";
/**
 *
 * @param {array} arr1 is an array
 * @param {array} arr2 is an array too
 * @returns {array} is sum of the
 */
function addMatrics(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      row[j] = arr1[i][j] + arr2[i][j];
    }
    result[i] = row;
  }
  return result;
}
let matrix = [
  [1, 1, 2],
  [2, 2, 3],
];
let matrix1 = [
  [2, 7, 2],
  [1, 1, 5],
];

console.log(addMatrics(matrix, matrix1));
