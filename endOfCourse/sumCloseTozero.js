"use strict";
/**
 *
 * @param {array} arr is an array
 * @returns {array}pair is an array
 */
function valuesSumCloseToZero(arr) {
  if (arr.length <= 1) return;
  let minOfSum = arr[0] + arr[1];
  let pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = Math.abs(arr[i] + arr[j]);
      if (sum <= Math.abs(minOfSum)) {
        minOfSum = sum;
        pair.push(arr[i]);
        pair.push(arr[j]);
      }
    }
  }
  return pair;
}
console.log(valuesSumCloseToZero([4, 2, -1, 3, -2, -3]));
