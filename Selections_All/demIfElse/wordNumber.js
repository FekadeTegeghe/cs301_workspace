let prompt = require('prompt-sync')();
let num = +prompt("Please enter a number between 1 and 5: ");
let in_words = "";
if(num === 1){
    in_words ="one";
}else if(num === 2){
    in_words = "two";
}else if(num === 3){
    in_words = "three";
}else if(num === 4){
    in_words = "four";
}else if(num === 5){
    in_words = "five";
}
console.log(in_words);
