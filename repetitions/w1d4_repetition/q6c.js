// const prompt = require("prompt-sync")();
// let num = prompt("Please enter a number: ");
let i = 5;
while(i >= 1){
    let j = 1;
    let row = "";
    while(j <= i){
        row = row + i;
        j++;
    }
    i--;
    console.log(row);
}