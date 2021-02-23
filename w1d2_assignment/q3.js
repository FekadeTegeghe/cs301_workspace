let prompt = require('prompt-sync')();
let numStacks;
let numBoxes = +prompt('Enter number of boxes: ');
let boxesPerStack = +prompt('Enter boxes per stack: ');
numStacks = Math.ceil(numBoxes/boxesPerStack);
console.log(numStacks); 
