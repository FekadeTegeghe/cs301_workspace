"use strict";
let prompt = require("prompt-sync")();
let distanceInMiles;
const CONVERSION_FACTOR = 0.621371;
let distanceInKm = +prompt("please input distance in killometers: ");
distanceInMiles = CONVERSION_FACTOR*distanceInKm;
console.log(`Distance in miles is: ${distanceInMiles}`);