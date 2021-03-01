const prompt = require("prompt-sync")();
let markMass = +prompt("Enter your mass: ");
let markHeight = +prompt("Enter your height: ");
let johnMass = +prompt("Enter your mass: ");
let johnHeight = +prompt("Enter your height: ");
let bmiMark;
let bmiJohn;
bmiMark = markMass/Math.pow(markHeight, 2);
bmiJohn = johnMass/Math.pow(johnHeight, 2);
let markHigherBmi = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBmi);


