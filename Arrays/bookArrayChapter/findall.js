"use strict";
// Find all occurrences of a value x in an array a and return an array
// of matching indexes
/**
 * 
 * @param {array} arr is an array
 * @param {number} value is a value 
 * @returns {array} is an array
 */
function findall(arr, value) {
    let results = [],            // The array of indexes we'll return
        len = arr.length,          // The length of the array to be searched
        pos = 0;                 // The position to search from
    while(pos < len) {           // While more elements to search...
        pos = arr.indexOf(value, pos); // Search
        if (pos === -1) break;   // If nothing found, we're done.
        results.push(pos);       // Otherwise, store index in array
        pos = pos + 1;           // And start next search at next element
    }
    return results;              // Return array of indexes
}
let array = [1, 2, 1, 5, 1, 3, 1];
let value = 1;
console.log(findall(array, value));
