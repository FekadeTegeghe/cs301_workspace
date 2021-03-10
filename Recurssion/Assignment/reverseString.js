"use strict";
/**
 * 
 * @param {string} str is a tring 
 * @returns {string} is a string
 */
 function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("You are a great lecturer"));
