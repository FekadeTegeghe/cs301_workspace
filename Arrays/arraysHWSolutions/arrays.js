"use strict";
/**
 * 
 * @param {array} arr is array 
 * @returns {number} sum is a number
 */
function addends(arr) {
    return arr[0] + arr[arr.length - 1];
}
/**
 * 
 * @param {array} arr is an array 
 * @returns {number} is a number
 */
function getMiddle(arr) {
    let half = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[half] + arr[half - 1]) / 2;
    } else {
        return arr[half];
    }
}
/**
 * 
 * @param {array} arr is an array 
 * @returns {array} arr is also an array
 */
function rotateLeft(arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return arr;
}
/**
 * 
 * @param {array} arr is an array 
 * @returns {array} arr is also ar array
 */
function rotateRight(arr) {
    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
}
/**
 * 
 * @param {array} arr is an array 
 * @param {*} num is a number
 * @returns {array} nRotated is an array
 */
function rotateNRight(arr, num) {
    let nRotated = arr;
    for (let i = 1; i <= num; i++) {
        nRotated = rotateRight(nRotated);
    }
    return nRotated;
}
/**
 * 
 * @param {number} first is a number
 * @param {number} second is a number too 
 * @returns {array} merged is an array
 */
function mergeSorted(first, second) {
    let merged = [];
    while (first.length > 0 && second.length > 0) {
        let smaller = first[0] < second[0] ? first : second;
        merged.push(smaller.shift());
    }

    if (first.length > 0) {
        merged.concat(first);
    } else if (second.length > 0) {
        merged.concat(second);
    }
    return merged;
}

console.log(mergeSorted([1,3,4,10,11],[1,3,4]));
module.exports = {
    addends, getMiddle, rotateLeft,
    rotateRight, rotateNRight, mergeSorted
};

