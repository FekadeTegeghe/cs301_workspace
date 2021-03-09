"use strict";
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
            return common.reverse();
        }else{
            common = common + str1[i];
        }
        j++;
    }
   
}
let str5 = "I love you";
let str4 = "I respect you";
console.log(suffix(str5, str4));