//upon rolling dice, count the # of guesses until 6 is up
let dice;
let guessCount =0;
while(dice !==6){
    dice = Math.floor(Math.random()*6 + 1);
    guessCount++;
    if(dice !==6)
        console.log(`${dice} is rolled at ${guessCount} attempt(s).`);
    else
        console.log(`You get it! ${dice} is rolled at ${guessCount}th attempt.`);
         }
