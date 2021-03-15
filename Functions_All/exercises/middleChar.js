"use strict";
/**
 * 
 * @param {string} str is a string
 * @returns {string} is a string
 */
function middleChar(str){
    for(let i = 0; i<str.length; i++){
    if(str.length%2 !==0){
        return str.charAt(Math.floor(str.length/2));   //(string)(index)
    }else{
        return str.charAt(str.length/2 - 1) + str.charAt(str.length/2);
    }

    }
}
console.log(middleChar("Awesome"));    //s
console.log(middleChar("very nice")); 
console.log(middleChar("great")); 
console.log(middleChar("Be Strongest")); 