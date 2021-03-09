"use strict";
const prompt = require("prompt-sync")();
let min = 999;
let max = 0;
let num;
let sum = 0;
let average;
let counter = 0;
do{
    num = prompt("input numbers: ");
    if(num == "stop"){
        break;
    }else{
    num = Number(num);
    sum = sum + num;
    counter++;
    if(num < min){
        min = num;
        
    }else if(num > max){
        max = num;  
    }
}
    
}while(num !== "stop");

console.log(min);
console.log(max);
average = sum/counter;
console.log(sum);
console.log(average);
console.log(counter);
