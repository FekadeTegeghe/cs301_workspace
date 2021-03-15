"use strict";
const prompt = require("prompt-sync")();
const PIN = "abc123";
let userInput = prompt("Password: ");
const MAX_GUESS = 3;
let guessCount = 1;
while(true){
if(userInput === PIN && guessCount<=MAX_GUESS){
    console.log("Correct, welcome back.");
    break;
}else if(userInput !== PIN && guessCount <=MAX_GUESS){
    console.log("Incorrect, please try again.");
    userInput = prompt("Password: "); 
}else if(userInput !== PIN && guessCount >= MAX_GUESS){
    console.log("Sorry but you have been lockedout.");
    break;
}
guessCount++;
}