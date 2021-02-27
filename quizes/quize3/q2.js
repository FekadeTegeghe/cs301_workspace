const promp = require("prompt-sync")();
let calendarYear = +prompt("Input calendar year: ");
if(calendarYear %100 === 0){
    if(calendarYear%400 === 0){
        console.log(`${calendarYear} is a leap year.`);
    }
    
}else if(calendarYear%4 ===0){
    console.log(`${calendarYear} is a leap year`);
}else{
    console.log(`${calendarYear} is not a leap year.`);
}
