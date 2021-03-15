"use strict";
const prompt = require("prompt-sync")();
let n = +prompt("Enter a number: ");
let sum = 0;
for(let i =1; i< n; i++){
    if(n%i === 0)
    sum = sum + i;
    }
    if(n === sum){
    console.log(`${n} is a perfect number. `);
    }else{
        console.log(`${n} is not a perfect number. `);
    }
