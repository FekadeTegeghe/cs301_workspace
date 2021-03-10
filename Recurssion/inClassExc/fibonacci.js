"use strict";
/*
Write recursive solution to find Fibonacci(n) based on following 
definition
fibonacci(0) = 1
fibonacci(1) = 1
fibonacci(n) = fibonacci(n-1) + fibonacci(n-2) [for n>1]
*/
/**
 * 
 * @param {number} num is a number
 * @returns {number} fib is a number
 */
function fibonacci(num){
    if(num === 0){
        return 0;
    }else if(num === 1){
        return 1;
    }else{
        return fibonacci(num - 1) + fibonacci(num -2);
    }
}
console.log(fibonacci(10));