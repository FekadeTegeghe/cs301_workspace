"use strict";
/*
Write a program that takes comma separated text from user and 
converts it into an array of words and prints in reverse order.
*/
const prompt = require("prompt-sync")();
let input;
let lowerCase;
do{
    
    input = prompt("please input some text: ");
    lowerCase = input.toLocaleLowerCase();
    console.log(input);
}while(lowerCase !== "stop");
