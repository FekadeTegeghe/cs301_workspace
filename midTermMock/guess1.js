// Guess secret number 5 b/n 1 - 10. If correct at ist guess, awesome, 2nd guess = great ...
"use strict";
const prompt = require("prompt-sync")();
let guessInput =+prompt("Please input your guess between 1 and 10: ");
let guessCount = 1;
let message;
while(guessInput !==5){ 
   guessInput = +prompt("Please input your guess between 1 and 10: ");
   guessCount++;
}
    if(guessCount === 1)
        message = "Awesome";
  
    if(guessCount === 2 )
        message = "Great";
    
    if(guessCount === 3 )
        message = "Not bad";
     
    if(guessCount > 3)
        message = `you took ${guessCount} attempts.`;
console.log(message);


    