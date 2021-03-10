"use strict";
/**
 * 
 * @param {string} str is a string 
 * @returns {number} is a number
 */
function findLength(str){
    if(str === ""){
        return 0;
    }else {
        return 1 + findLength(str.substring(1));
    }
}
console.log(findLength("hello"));