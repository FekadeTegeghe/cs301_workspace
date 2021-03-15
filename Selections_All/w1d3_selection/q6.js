"use strict";
const prompt= require("prompt-sync")();
let s = +prompt("Please enter the number of students: ");
let t = +prompt("Please input the number of teams you want: ");
let remainder;
let membersCount;
remainder = s%t;
membersCount = Math.floor(s/t);
console.log(`${t-remainder} team(s) has ${membersCount} members and the rest ${remainder} team(s) has one more member.`)