"use strict";
const prompt = require("prompt-sync")();
let num;
let area;
while(true){
    if(!(num>0)){
        num= +prompt("Enter radius: ");

    }else{
        area = Math.PI*Math.pow(num, 2);
        break;
    }
}
console.log(area);
