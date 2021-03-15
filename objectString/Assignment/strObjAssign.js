"use strict";

let car = {};
car.make = "Toyota";
car.model = "Camry";

console.log(car);

car.model = "RAV4";
console.log(car);

delete car.make;
console.log(car);
//2. write function to count the number of properties of an object
/**
 * 
 * @param {object} object is an object 
 * @returns {number} count is a number
 */
function countProperties(object){
    let counter = 0;
    for(let key in object){
        if(object[key] !== undefined){
            counter++;
        }
    }
    return counter;
}
console.log(countProperties(car));

//3. write a function checkSpam() that returns true if it contains "lettery" or "prize" else false
/**
 * 
 * @param {string} str is a string 
 * @returns {boolean} true is a boolean
 */
function  checkSpam(str){
    if(str.includes("lottery") || str.includes("prize")){
        return true;
    }else{
        return false;
    }
}
let str1 = "You got a trilion usd lottery.";
let str2 = "You are lucky to get the prize.";
let str3 = "Don't be cheated. It is spam.";
console.log(checkSpam(str1));
console.log(checkSpam(str2));
console.log(checkSpam(str3));

//4. write a function named suffix that return the common suffix of two strings.
/**
 * 
 * @param {string} str1 is a string
 * @param {string} str2 is a string
 * @returns {boolean} true is a boolean
 */
function suffix(str1, str2){
    let j = 0;
    let common = "";
    for(let i = str1.length - 1; i>=0 ; i--){
        if(str1[i] !== str2[str2.length - 1 - j]){
            return common.split("").join("");
        }else{
            common[j] = common + str1[i];
        }
        j++;
    }
   
}
let str5 = "I love you";
let str4 = "I respect you";
console.log(suffix(str5, str4));

//5. write a function named titleCase with one parameter named s. This function should return a copy of s
//with the first letter of s capitalized
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
titleCase(word);

//6. Write a swap function that takes two parameters of number type and swap the values of the passed parameters
/**
 * 
 * @param {number} par1 is a number
 * @param {number} par2 is a number
 * @returns {number} par is a number
 */
function swapPar(par1, par2){
    
        let pars = [par2, par1];
    return pars;
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
        for(let i = 0; i < users.length; i++){
            sum+=users[i].age;
            console.log(users[i]);
            console.log(users[i].name);
        }
        average = sum/users.length;
        return average;
    }
    
let users = [{name: "abc", age: 20}, {name: "xyz", age: 10}];
console.log(getAverageAge(users));

/*
1. How can you make a copy of an object?
we can have a copy of an object by pointing the copy to the reference of the original object.
For Example: 
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let copiedPerson = person;

2. How do you remove the white spaces that may be at the beginning and ending of a string
value?
we can avoid beginning and ending spaces using trim() string method in javascript.
*/