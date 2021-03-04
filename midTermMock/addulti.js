"use strict";
let result = 0;
function multiply(n1, n2){
    for(let i = 0; i<n1; i++){
        result = result + n2;   
    }
    return result;
}
console.log(multiply(3, 5));