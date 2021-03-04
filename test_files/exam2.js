"use strict";
const prompt = require("prompt-sync")();
let itemCount = +prompt("How many items do you purchase?: ");

let totalPrice =0;

let i =0;

while(i < itemCount){

let price = +prompt("Please input price of item: ");

totalPrice = totalPrice + price;
if(totalPrice > 99){

    let discountedPrice = totalPrice - totalPrice*0.1;
    console.log(discountedPrice);
    }

i++;
}

