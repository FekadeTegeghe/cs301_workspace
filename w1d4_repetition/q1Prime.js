const prompt = require("prompt-sync")();
// take input from the user
const lowerNumber = +prompt('Enter lower number: ');
const higherNumber = +prompt('Enter higher number: ');

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let factorCount = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            factorCount = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && factorCount == 0) {
        console.log(i);
    }
}