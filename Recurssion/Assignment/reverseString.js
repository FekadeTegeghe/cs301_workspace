"use strict";
/**
 * 
 * @param {string} str is a tring 
 * @returns {string} is a string
 */
 function reverseString(str) {
    if (str === "" || str.length ===1)
      return str;
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("You are a great lecturer"));
  console.log(reverseString("5"));
  console.log(reverseString(""));
  console.log(reverseString("A"));
