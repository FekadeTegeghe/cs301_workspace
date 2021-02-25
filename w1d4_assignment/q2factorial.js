const prompt = require("prompt-sync")();
let input = +prompt("Please input a number: ");
let factorial = 1;
for(let number = input; number > 0; number--){
    factorial = factorial*number;
}
console.log(factorial);
