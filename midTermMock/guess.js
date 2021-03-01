const prompt = require("prompt-sync")();
let guessInput;
let guessCount = 0;
do{
    guessInput = +prompt("Please input your guess between 1 and 10: ");
       guessCount++; 
}
while(guessInput !== 5);
if(guessCount === 1){
    console.log("Awesome");
   
}else if(guessCount === 2){
    console.log("Great");
  
}else if(guessCount === 3){
    console.log("Not bad");
   
}else{
    console.log(`you took ${guessCount} attempts.`);
     
}


