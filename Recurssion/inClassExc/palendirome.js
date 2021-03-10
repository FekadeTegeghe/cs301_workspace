"use strict";
/*
Write a recursive function to test weather a give string is palindrome 
or not.
*/
/**
 * 
 * @param {string} str is a string
 * @returns {boolean} is a boolean
 */
 function testPalindrome(str) {
    if (str.length === 0 || str.length === 1)
    return true;
    else {
    if (str[0] === str[str.length - 1])
    return testPalindrome(str.substr(1, str.length - 2));
    else
    return false;
    }
    }
    console.log(testPalindrome("daad"));