"use strict";
/**
 * 
 * @param {number} aaa is a number
 * @param {number} bbb is a number
 * @param {number} ccc is a number 
 * @returns {number} c is a number
 */
function secondLargest(aaa, bbb, ccc){
    if(aaa>bbb && aaa<ccc || aaa<bbb && aaa>ccc){
        return aaa;
    }else if(bbb>aaa && bbb<ccc || bbb < ccc && bbb > aaa){
        return bbb;
    }else{
        return ccc;
    }
}
console.log(secondLargest(-3,5, -1));