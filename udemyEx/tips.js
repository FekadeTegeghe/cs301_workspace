"use strict";
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
/**
 * 
 * @param {array} billsArr is an array
 * @returns {array} totals is an array
 */
function calcTips(billsArr){
const tips = [];
const totals = [];
let sum = 0;

for(let i = 0; i<bills.length; i++){
    tips[i] = billsArr[i]*0.15;
    totals[i] = billsArr[i] + tips[i];
    sum += totals[i];
}
return sum/bills.length;
}
calcTips(bills);
console.log(calcTips(bills));
