"use strict";
/**
 *
 * @param {array} arr is an array
 * @param {number} target is a number
 * @returns {array}nums is array
 */
function addendsOfTarget(arr, target) {
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] !== target) {
        continue;
      } else if (arr[i] + arr[j] === target) {
        nums[0] = arr[i];
        nums[1] = arr[j];
      }
    }
  }
  return nums;
}
console.log(addendsOfTarget[(2, 7, 11, 15)], 11);
console.log(addendsOfTarget[(2, 3, 4)], 6);
console.log(addendsOfTarget[(3, 3)], 6);
