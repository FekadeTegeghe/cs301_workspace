let prompt = require('prompt-sync')();
let sales = +prompt("Enter sales revenue: ");
if(sales < 300){
    console.log(`No commission for sales below ${$300}`);
}else if(sales > 300 && sales < 500){
    console.log(`Your sales commission is $${sales*0.01}`);
}else if(sales > 500 && sales < 1000){
    console.log(`Your sales Commission is $${sales*0.02}`);
}else if(sales > 1000){
    console.log(`Your sales Commission is $${sales*0.03}`);
}
