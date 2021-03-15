"use strict";
const prompt = require("prompt-sync")();
let fibA;
let fibB;
let fibN;
let num = +prompt("Please input a number: ");
if(num < 2 ){
    console.log(num);
}else {
    fibA = 0;
    fibB = 1;
    let i =1;
    while(i<num){
        fibN = fibA + fibB;
        fibA = fibB;
        fibB = fibN;
        i++;
        console.log(`The ${i}th fibonacci number is ${fibN}.`);
    }
}