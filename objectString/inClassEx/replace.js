"use strict";
/*
Write a program to replace the first occurrence of "for" in an input 
string with 4.
*/
const prompt = require("prompt-sync")();
let input = prompt("Please enter some comma separated words: ");
let replaced = input.replace("for", "4");
console.log(replaced);