let prompt = require('prompt-sync')();
let weather = prompt("Please enter weather outside: ");
let temp = +prompt("Please enter current temperature: ");
if (weather === "sunny" && temp < 80) {
    console.log("Good day for outdoor running");
} else {
    console.log("Good day for swimming");
}