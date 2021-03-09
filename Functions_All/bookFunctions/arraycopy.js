"use strict";
/**
 * 
 * @param {array} param0 is an array
 * @returns {array} is an array
 */
function arraycopy({from, to: tof=from, n: num=from.length, fromIndex=0, toIndex=0}) {
    let valuesToCopy = from.slice(fromIndex, fromIndex + num);
    tof.splice(toIndex, 0, ...valuesToCopy);
    return tof;
}
let val1 = [1,2,3,4,5], val2 = [9,8,7,6,5];
arraycopy({from: val1, num: 3, tof: val2, toIndex: 4}); // => [9,8,7,6,1,2,3,5]
