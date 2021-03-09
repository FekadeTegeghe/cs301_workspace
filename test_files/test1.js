"use strict";
/**
 * 
 * @param {string} str is a string 
 * @returns {string} copy is also a string
 */
 function titleCase(str){
    let copy = str[0].toUpperCase() + str.substring(1);
    return copy;
}
let word = "awesome";
console.log(titleCase(word));

/**
 * 
 * @param {number} par1 is a number
 * @param {number} par2 is a number
 * @returns {number} par is a number
 */
function swapPar(par1, par2){
    
        let val = par1;
        par1 = par2;
        par2 = val;
    console.log(`${par1}, ${par2}`);
  
}
let val1 = 5;
let val2 = 7;
console.log(val1, val2);
swapPar(val1, val2);

//7. Write the function getAverageAge(users) that gets an array of objects with two properties
// name and age and returns the average age
/**
 * 
 * @param {object} users is an object 
 * @returns {number} average is a number
 */
function getAverageAge(users){
    let sum = 0;
    let average;
    for(let user in users){
        let len = user.length;
        for(let i = 0; i < len; i++){
            sum+=user[i];
        }
        average = sum/len;
    }
    return average;
}
let users = [{
    name: "abc", age: 20}, {name: "xyz", age: 10}];
getAverageAge(users);
