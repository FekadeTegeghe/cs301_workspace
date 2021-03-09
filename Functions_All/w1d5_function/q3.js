/* eslint-disable valid-jsdoc */
"use strict";
let volumeOfHouse;
let volumeOfLivingRoom;
let areaOfTriangle;
let volumeOfRoof;
// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @param {number} width refers to width of the house
 * @param {number} height refers to the height of the house
 * @param {number} depth refers to the depth of the house
 */
function livingVolume(width, height, depth){
volumeOfLivingRoom = width*height*depth;
return volumeOfLivingRoom;
}
livingVolume(3, 5, 6);
/**
 * 
 * @param {number} num1 
 * @param {number} b 
 * @param {number} width 
 */
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @param {number} width 
 * @param {number} avg 
 */
let triangleArea =function(num1, num2
    , width){
let avg = (num1+num2+width)/2;
areaOfTriangle = Math.sqrt(avg*(avg-num1)*(avg-num2)*(avg-width));
return areaOfTriangle;
}
triangleArea(5, 5, 3);
/**
 * 
 * @param {number} depth 
 */
function roofVolume(triangleArea, depth){
volumeOfRoof = triangleArea()*depth;
return volumeOfRoof;
}
roofVolume(6);
// eslint-disable-next-line valid-jsdoc
/**
 * volume refers to the volume of the house
 */
function houseVolume(){
volumeOfHouse = livingVolume() + roofVolume();
return volumeOfHouse;
}
console.log(houseVolume());
