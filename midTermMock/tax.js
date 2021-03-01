const prompt = require("prompt-sync")();
let salary = prompt("Please input your salary: ");
let taxAmount;
if(salary >= 50000){
    taxAmount = 1500 + (salary - 50000)*0.1;
}else if(salary >= 20000){
    taxAmount = 0.05*(salary - 20000);
}else if(salary <= 20000 && salary > 0){
    taxAmount = 0;
}
console.log(taxAmount);
