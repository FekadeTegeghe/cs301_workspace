"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {boolean} is bool
 */
function isPrimeEven(arr){   //
    let sum=[];
    let total = 0;
     for(let i = 0;i<arr.length;i++){   //[2, 3, 4, 5]
    for(let j = 2 ;j< arr[i];j++)
    if(arr[i]%j!==0){
      sum.push(arr[i]);
    }
    }
    if(sum.length ===0){
        return false;
    }
    for(let kkk = 0; kkk<sum.length; kkk++){
     total += sum[kkk];
    }
    
     return(total%2===0);
     
    }
    console.log(isPrimeEven([2, 3, 4, 5]));   //10 true
    console.log(isPrimeEven([]));                //false
    console.log(isPrimeEven([6, 4, 8, 5]));        //no prime false
    console.log(isPrimeEven([1, 2, 2, 4, 5]));      //9 false
  