"use strict";
/*
Write a program that keeps on asking for user input and prints it, until 
user types the word "stop" (without quotes). "Stop" word can be in 
any case (small, capital or mixed)

*/

const prompt = require("prompt-sync")();
let input = prompt("please input comma separated texts: ");
let array = input.split(",");
console.log(array);
array.reverse();
console.log(array);
let joinedStr = array.join("-");
console.log(joinedStr);