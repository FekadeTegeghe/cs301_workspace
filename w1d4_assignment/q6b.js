// const prompt = require("prompt-sync")();
// let num = prompt("Please enter a number: ");
let i = 1;
while(i<=5){
    let j=1;
   let row = "";
    while(j<=i){
        row = row + j;
        j++;
    }
    i++;
    console.log(row);
}