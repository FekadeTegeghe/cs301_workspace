const prompt = require("prompt-sync")();
let min = 999;
let max = 0;
let num = prompt("Enter a number: ");
let sum = 0;
let average;
let counter = 0;
while(num !== "stop"){
    num = Number(num);
    sum = sum + num;
    counter++;
    if(num < min){
        min = num;
        
    }else if(num > max){
        max = num;
        
    }
    num = prompt("Enter a number: ");
}
console.log(min);
console.log(max);
average = sum/counter;
console.log(sum);
console.log(average);
console.log(counter);
