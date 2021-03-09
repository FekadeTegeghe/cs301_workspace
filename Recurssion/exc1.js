"use strict";
/**
 * 
 * @param {number} num1  is number
 * @param {number} num is number 
 * @returns {number} number
 */
function power(num1, num){   // num1^num 3^4 = 3^4=3*3^3 = 3*3*3^2 =3*3*3*3^1
    if(num === 1 && num1 !== 0){
        return num1;

    }else {
        return num1*power(num1, num -1);   // num1*num1*power(num1, num -2)
    }
}
console.log(power(3, 4));

//3*3^4 =
//3*3*3^3 =
//3*3*3^2 =
//3*3*3*3^1 =
//3*3*3*3*3^0

