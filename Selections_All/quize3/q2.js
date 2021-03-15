"use strict";
const prompt = require("prompt-sync")();
let calendarYear = +prompt("Input calendar year: ");
if(calendarYear %100 === 0){
    if(calendarYear%400 === 0){
        console.log(`${calendarYear} is a leap year.`);
    }
    
}else if(calendarYear%4 ===0){
    console.log(`${calendarYear} is a leap year`);
}else{
    console.log(`${calendarYear} is not a leap year.`);
}
/**
 * 
 * @param {number} year is a number
 * @returns {boolean} is a boolean
 */
function isLeapYear(year){
    if((year%4 === 0 && year%100 !==0) || (year%400 ===0 && year%4 ===0)){
       return true;
    }
    return false;
    }
    console.log(isLeapYear(2016));
    console.log(isLeapYear(2000));
    console.log(isLeapYear(1700));
    console.log(isLeapYear(1800));
    console.log(isLeapYear(2014));
    console.log(isLeapYear(2020));