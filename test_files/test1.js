"use strict";
const prompt = require("prompt-sync")();
//let input = prompt("please input comma separated inputs");
/**
 * 
 * @param {string} str is a string 
 * @returns {string} copy is also a string
 */
 /*function titleCase(str){
    let copy = str[0].toUpperCase() + str.substring(1);
    return copy;
}
let word = "awesome";
console.log(titleCase(word)); */
//1. Write a JavaScript function to get the first element of an array.
//  Passing a parameter 'n' will return the first 'n' elements of the array

/*let first = function(array, num){
    if(array == null) return void 0;
    if(num == null) return array[0];
    if(num < 0) return [];
    return array.slice(0, num);
};
let array = [7, 9, 0, -2];
console.log(first(array, 3)); */
//2. Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.
/*let last = function(array, num){
    if(array == null) return void 0;
    if(num == null) return array[0];
    if(num < 0) return [];
    return array.slice(num, array.length);
};
let array = [7, 9, 0, -2];
console.log(last(array, 1)); */
//4. join comma separated array methods.
/*
let joining = function(inputs){
    let joined = inputs.join("-");
    return joined;
};
let inputs = ["awesome", "hello", "hi", "right"];
console.log(joining(inputs));  */
/**
 * 
 * @param {string} str is a tring 
 * @returns {string} is a string
 */
 /*function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("hello"));
  */
 /**
  * 
  * @param {number} num is a number
  * @returns {boolean} is a number
  */
 function testPrime(num){
     for(let i = 2; i<num; i++){
         if(num%i ===0){   //becareful for not saying num%2 insteady of num%i
             return false;
     }
 }
 return true;
}
console.log(testPrime(23));
console.log(testPrime(51));
console.log(testPrime(53));



