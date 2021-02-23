let prompt = require('prompt-sync')();
let distanceInMiles;
const CONVERSION_FACTOR = 0.621371;
let distanceInKillometers = +prompt('please input distance in killometers: ');
distanceInMiles = CONVERSION_FACTOR*distanceInKillometers;
console.log(distanceInMiles);