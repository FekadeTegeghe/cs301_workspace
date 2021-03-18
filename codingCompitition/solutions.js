"use strict";
//Question 1.
/**
 *
 * @param {array} arr is an array
 * @param {number} k is a number
 * @returns {numbers}is pair of numbers
 */
/*function divisibleSumPairs(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % k !== 0) {
        continue;
      } else if ((arr[i] + arr[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}
console.log(divisibleSumPairs([1, 2, 3, 4, 5], 5)); */

//question2
/**
 *
 * @param {array} arr is an array
 * @returns {number} is a number
 */
/*function mostFrequentSight(arr) {
  let counter = 0;
  let frequent;
  for (let i = 0; i < arr.length; i++) {
    let update = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        update++;
      }
    }
    if (update > counter) {
      counter = update;
      frequent = i;
    }
  }
  return frequent;
}
let arr = [1, 2, 3, 2, 2, 3, 2, 3, 2, 3];
console.log(mostFrequentSight(arr));  */

//Question 3
/**
 *
 * @param {array} arr is an array
 * @returns {number}is a number
 */
/*function countSocksPairs(arr) {
  // let sorted = arr.sort();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    return [arr[i], Math.floor(count / 2)];
  }
}
console.log(countSocksPairs([10, 20, 20, 10, 10, 30, 50, 10, 20]));  */
//question4
/**
 *
 * @param {number} height is a number
 * @param {number} cycles is a number
 * @returns {number} is a number
 */
function computeHeight(height, cycles) {
  //(2*h +1)*cycles
  let heightAfterNYears = (2 * height + 1) * cycles;
  return heightAfterNYears;
}
console.log(computeHeight(0, 1));
console.log(computeHeight(1, 2));
console.log(computeHeight(1, 3));
console.log(computeHeight(1, 4));
//question 5
//@BeimnetTesfaye
/**
 *
 * @param {array} arr
 * @returns {array}
 */
function computeCharges(arr) {
  let newarr = [];
  let sum = 0;
  let max = 0;
  let average;
  let i = 0;
  newarr.push(arr[i].custId);
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i].charges;
  }
  average = sum / arr.length;
  newarr.push(average);
  if (arr[i].charges > max) {
    max = arr[i].Charges;
    newarr.push(max);
  }

  return newarr;
}

let arr = [
  { custId: 1, charges: [5, 7, 3] },
  { custId: 2, charges: [20, 60, 50, 30] },
];
console.log(computeCharges(arr));
