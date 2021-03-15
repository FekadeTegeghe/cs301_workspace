"use strict";
/**
 * 
 * @param {array} arr is an array 
 * @returns {number}sumPrime is a number
 */
/*function sumPrimeIndices(arr){
    let sumPrime = 0;
    let prime;
    for(let i = 3; i<arr.length; i++){
       for(let j = 2; j < i; j++){
           if(i%j !== 0){
            prime = i;
               sumPrime += arr[prime];
           }
       }
    }
    return sumPrime;
}
console.log(sumPrimeIndices([1,5,6,7,8,3]));   //1 + 2 + 4 +5
console.log(sumPrimeIndices([]));
console.log(sumPrimeIndices([2,3,4,5,7,8]));
console.log(sumPrimeIndices([3,9,9,5,5,7,9]));*/
/**
 * 
 * @returns {array} is an array
 */
function isSumPrimeIndices(){
    let index = [];
    for(let i =2; i<20; i++){
        for(let j = 2; j<i; j++){
            if(i%j ===0){
                break;
            }
                  
        }
        index.push(i);
        break;   
    }
    return index;
}
console.log(isSumPrimeIndices());
