"use strict";
const prompt = require("prompt-sync")();
let input = prompt("please input a value: ");
let value = input.toLowerCase;
while(input !== "stop"){
    input = prompt("please input a value: ");
 if(input === "stop"){
    console.log("stop is inputed.");
   
}
}