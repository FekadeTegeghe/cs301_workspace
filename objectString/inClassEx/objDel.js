"use strict";
let sam1 = {
    name: "Sam",
    age: 10,
};
let sam2 =  {
    name: "Sam",
    age: 10,
};
let john = {
    name: john,
    age: 10,
};
console.log(sam1 === sam2);   //False
/**
 * 
 * @param {object} obj1 is an object
 * @param {object} obj2 is an object
 * @returns {boolean} true is a boolean
 */
 function isPersonEqual(obj1, obj2){      //
     if(obj1.name === obj2.name && obj2.age === obj2.age){
         return true;
     }else{
         false;
     }
 }
 isPersonEqual();
 console.log(isPersonEqual());    //True