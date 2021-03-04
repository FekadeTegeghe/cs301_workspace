"use strict";
const prompt = require("prompt-sync")();
let age;
do{
    age = prompt("Please enter your age: ");

}while(age<18);
console.log("You are matured. ");

