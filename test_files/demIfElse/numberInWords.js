let prompt = require('prompt-sync')();
let num = +prompt("Please enter a number between 1 and 5: ");
if(num === 1){
    console.log("one");
}else if(num === 2){
    console.log("two");
}else if(num === 3){
    console.log("three");
}else if(num === 4){
    console.log("four");
}else if(num === 5){
    console.log("five");
}

//Using switch
let num1 = +prompt("Please enter a number between 1 and 5: ");
switch(num1){
    case 1:
        console.log("one");
        break;
    case 2:console.log("two");
        break;
    case 3: 
    console.log("three");
    break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");

}