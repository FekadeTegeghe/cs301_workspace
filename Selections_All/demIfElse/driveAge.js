let prompt = require('prompt-sync')();
let age = +prompt("Input your age: ");
if(age < 0){

    console.log('Please enter valid age');
}else if(age >= 0 && age <=14){

    console.log("you cannot drive yet. ");
}else if(age >=15 && age<=18){
    console.log("you can drive under supervision.");
}else{
    console.log("You can drive.");
}

//Alternative method
let age1 = +prompt("Input your age: ");
if (age1<=0){
    console.log("please input a valid age.");
}else if(age1 <= 14){
    console.log("you cannot drive yet");
}else if(age1 <= 18){
    console.log("you can drive under supervision");
}else{
    console.log("you can drive.");
}
  
