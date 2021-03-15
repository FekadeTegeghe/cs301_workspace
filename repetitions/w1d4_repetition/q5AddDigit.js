"use strict";
const prompt = require("prompt-sync")();
let num = prompt("Please input a number: ");
let sum = 0;
for(let i = 0; i<num.length; i++){
    sum = sum + Number(num.charAt(i)); 
}
console.log(sum);