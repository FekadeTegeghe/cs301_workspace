const prompt = require("prompt-sync")();
let downPayment;
let cost = prompt('Enter cost of the house: ');
if(cost>0 && cost<50000){
downPayment==0.05*cost
console.log('Your down payment is ' + downPayment);
}else if(cost>=50000 && cost<100000){
downPayment = 1000 + 0.1*(cost - 50000);
console.log('Your down payment is ' + downPayment);
}else if(cost>=100000 && cost<200000){
downPayment = 2000 + 0.15*(cost - 100000);
console.log('Your down payment is ' + downPayment);
}else if(cost>=200000){
downPayment = 5000 + 0.1*(cost - 200000);
console.log('Your down payment is ' + downPayment);
}
