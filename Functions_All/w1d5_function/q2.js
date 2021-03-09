"use strict";
//a. area of a circle
const prompt = require("prompt-sync")();
let rad = prompt("Please input radius: ");
let size;
// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @param {number} rad is radius of base of a cylinder
 * @param {number} return the return value volume and area of base are numbers
 */
function area(rad){
size = Math.PI*Math.pow(rad, 2);
return size;
}
console.log(area(rad));
console.log("-----------------");
// b.	Cylinder – nice working code
let height = prompt("Please input height of cylinder: ");
let volume;
// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @param {number} height is a numerical value representing height of cylinder
 * @param {number} volume is the volume of the cylinder
 */
function cylinderVolume(height){
volume = area(rad)*height;
return volume;
}
console.log(cylinderVolume(height));
