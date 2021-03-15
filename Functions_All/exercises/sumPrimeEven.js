"use strict";
 /**
   * 
   * @param {array} arr is an array
   * @returns {boolean} is boolean
   */
  function isPrimeEven(arr){
    let sum = 0;
    let prime;
    if(arr.length === 0){
      return false;
    }
    for(let value of arr){
      if(isPrime(value) === false){
        continue;
      }else if(isPrime(value) === true){
        prime = value;
        sum = sum + prime;
      }
    }
    if(sum%2 !==0 || arr.includes(prime) !== true){
      return false;
    }else if(sum%2 === 0){
      return true;
    }
    
  }
  console.log(isPrimeEven([1, 2, 3, 4, 5]));   //10 true
  console.log(isPrimeEven([]));                //false
  console.log(isPrimeEven([1, 6, 4, 8]));        //no prime false
  console.log(isPrimeEven([1, 2, 2, 4, 5]));      //9 false

  /**
   * 
   * @param {number} num is a number 
   * @returns {boolean} is bool
   */
  function isPrime(num){
      for(let ttt = 2; ttt<num.length; ttt++){
          if(num%ttt === 0){
            return false;
          }
      }
      return true;
  }
  // isPrime();
  
