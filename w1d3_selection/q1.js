const prompt = require("prompt-sync")();
let weather = prompt("what is the weather like today? ");
if(weather === "hot"){
    console.log("Appropriate footwear is sandals.");
}else if(weather === "rain"){
    console.log("Appropriate footwear is galoshes.");
}else if(weather === "snow"){
    console.log("Appropriate footwear is boots.");
}else{
    console.log("Appropriate footwear is sneakers.");
}