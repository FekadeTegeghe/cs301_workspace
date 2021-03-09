const prompt = require("prompt-sync")();
let studentName = prompt("what is your name? ");
let completedCrHr = +prompt("What is the number of credit hour you take? ");
if(completedCrHr >0 && completedCrHr <30){
    console.log(`${studentName} is Freshman`);
}else if(completedCrHr >=30 && completedCrHr< 60){
    console.log(`${studentName} is Sophomore `);
}else if(completedCrHr >= 60 && completedCrHr <90){
    console.log(`${studentName} is Junior `);
}else if(completedCrHr > 90){
    console.log(`${studentName} is Senior `);
}