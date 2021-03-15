"use strict";
const prompt = require("prompt-sync")();
let age = +prompt('Enter your age: ');
let season = prompt('Enter the season: ');
if ((age <= 5 && (season === 'summer' || season === 'fall')) ||
    ((age >= 6 && age <= 12) && (season === 'winter' ||
        season === 'spring' || season === 'fall'))) {
    console.log('Bed time should be 8:30PM');
} else if ((age >= 13 && (season === 'spring' || season === 'fall' || season === 'winter')) || 
((age >= 6 && age <= 12) && season === 'summer')) {
    console.log('Bed time should be 9:30PM');
} else if ((age >= 6 && age <= 12) &&
    (season === 'winter' || season === 'spring')) {
    console.log('Bed time should be 8:00PM');
} else if (age >= 13 && season === 'summer') {
    console.log('Bed time should be 10:30PM');
} else if (age <= 5 && (season === 'winter' || season === 'spring')) {
    console.log('Bed time should be 8:00PM');
}
