"use strict";

let average = findAverage([10, 20, 30, 40, 50]);
console.log(average);  

/**
 * 
 * @param {object} arr it is an array
 * @param {number} avg it is a number
 * @return {number} sum
 */
function findAverage(arr){
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        sum += arr[i];
        }
        let avg = sum/arr.length;
        return avg;
}
// console.log(findAverage([10, 20, 30, 40, 50]));

//Generating array from random numbers
let arr1 = [];
let sum1 = 0;
for(let j = 0; j<10; j++){
    arr1[j] = Math.floor(Math.random()*10);
    sum1+=arr1[j];
}
console.log(arr1);
// let avg = sum1/arr1.length;
// console.log(avg);
console.log(findAverage(arr1));