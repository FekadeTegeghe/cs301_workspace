"use strict";
//const prompt = require("prompt-sync")();
/**
 *
 * @param {number} result is a num
 * @returns {number} is a
 */
/*function myDisplayer(result) {
    console.log(`Result of the calculation is ${result}`);
    }
    /**
     * 
     * @param {number} num1 is a number
     * @param {number} num2 is a number
     * @param {number} myCallback is a number
     * @returns {number} is
     */
/*function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
    }
    console.log(myCalculator(5, 5, myDisplayer)); */
/**
 *
 * @param {array} item is an array
 * @returns {array} is
 */
/*function display(item) {
        console.log(item);
        }
        // for each element call display
        ["Bilbo", "Gandalf", "Nazgul"].forEach(display); */
//  ["Bilbo", "Gandalf", "Nazgul"].forEach(item=>console.log(item))

/*let x = 10;
function main() {
  let x = 0;
  console.log("x1 is " + x);
  x = 20;
  console.log("x2 is " + x);
  if (x > 0) {
    x = 30;
    console.log("x3 is " + x);
  }
  console.log("x4 is " + x);
  function f(x) {
    console.log("x5 is " + x);
  }
  f(50);
  console.log("x6 is " + x);
}
main();
console.log("x7 is " + x); */
/*function funX(a, b) {
    let c;
    c = 5;
    funY(a * c, "yes");
    }
    function funY(x, y) {
    let z;
    z = "I can see the sea";
    console.log("What is on the stack here?");
    }
    function main() {
    let a;
    let b;
    a = "Hello";
    funX(3, a);
    b = "World";
    }
    main();*/
/**
 *
 * @param {array} arr is an array
 * @returns {number} is a number
 */
/*function secondLargest(arr){
      let first = arr[0];
      let second = arr[0];
      for(let i = 0; i<arr.length; i++){
        if(arr[i]>first){
          second = first;
          first = arr[i];
        }else if(arr[i] > second){
          second = arr[i];
        }
      }
      return second;
    }
    let arr = [3, 5, 2, 6, 11, 9];
    console.log(secondLargest(arr)); */
/*function isEvenDominated(arr){
      let count = 0;
      for(let i =0; i<arr.length; i++){
        if(arr[i]%2 === 0){
          count++;
        }
      }
      if(count > arr.length/2){
        return true;
      }else {
        return false;
      }
    }
    let arr = [11, 5, 2, 6, 4, 9];
    console.log(isEvenDominated(arr)); */
/* function deleteValue(arr, index){
      let newArr = [];
      for(let i =0; i < arr.length; i++){
        if(index === arr.indexOf(arr[i])){
          continue;
        }else {
         newArr.push(arr[i]);
        }
      }
      return newArr;
    }
    let arr = [3, 5, 2, 6, 11, 9];
    console.log(deleteValue(arr, 3)); */
/**
 *
 * @param {array} arr is an array
 * @returns {array} is an array
 */
/* function findUnique(arr){   //????????????
      for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
          if(arr[i] === arr[j]){
            continue;
          }else {
            return arr;
          }  
        }
       
      }
      // return arr;
    }
    let unique = [2, 3, 2, 2, 3, 5, 7, 3, 2]; //2, 3, 5, 7
    console.log(findUnique(unique)); */
/**
 *
 * @param {number} first is a number
 * @param {number} second is a number too
 * @returns {array} merged is an array
 */
/*function mergeSorted(first, second) {
  let merged = [];
  while (first.length > 0 && second.length > 0) {
      let smaller = first[0] < second[0] ? first : second;
      merged.push(smaller.shift());
  }
 
  if (first.length > 0) {
    for(let i = 0; i < first.length; i++){
      merged.push(first[i]);
    }
  } else if (second.length > 0) {
    for(let j=0; j < second.length; j++){
      merged.push(second[j]);
    }
  }
  return merged;
}

console.log(mergeSorted([1,3,4],[1,3,4, 10,11]));   //merged.concat[4, 10, 11] */
/**
 *
 * @param {array} arr11 is an array
 * @param {number} num10 is a number
 * @returns {array} is an array
 */
/*function enhancedIncludes(arr11, num10) {
  let arr12 = [];
  let count = 0;
  for (let i = 0; i < arr11.length; i++) {
    if (arr11[i] == num10) {
      count = count + 1;
      if (count == 1) {
        arr12.push(true);
        arr12.push(i);
      } else if (count === 2) {
        arr12.push(i);
      } else if(count > 2){
        arr12.pop();
        arr12.push(i);
      }
    }
    
  }
  return arr12;
}

console.log(enhancedIncludes([2, 3, 7, 3, 3, 9, 3, 3], 3)); //[true, 1, 5];  */
/**
 * 
 * @param {array} arr is an array
 * @returns {array} is an array
 */
/*function reverse(arr){
  let copy = arr.slice();
  let reversedCopy = [];
  for(let i = 0; i<arr.length; i++){
    reversedCopy[i] = (Number)(copy.splice(copy.length - 1));   //arr.splice(arr.length - 1) = [9],  
  }
  return reversedCopy;
}
let arr = [2, 3, 7, 5, 9];
console.log(reverse(arr));    */
/**
 * 
 * @param {array} arr is an array
 * @returns {array} is an array
 */
 /*function getUnique(arr){
  let unique=[];
  let kkk = 0;
  for(let i = 0; i<arr.length-1; i++){
  for(let sss = 0; sss <= unique.length; sss++){
  if(arr[i] !== unique[sss]){
  for(let j = i+1; j<arr.length; j++){
  if(arr[i] !== arr[j]){
  unique[kkk] = arr[i];
  }
  }
  }
  }
  kkk++;
  }
  return unique;
  }
  let arr = [2, 3, 7, 3, 3, 9, 3, 3];
  console.log(getUnique(arr));   */
  /**
   * 
   * @param {array} arr is an array
   * @returns {boolean} is boolean
   */
   function isSumOfPrimeEven(arr){
    let sum = 0;
    let prime;
    for(let i = 0; i <arr.length; i++){
      if(arr[i]%(i+2) !== 0){
        prime = arr[i];
        sum = sum + prime;
      }
    }
    if(arr.length === 0 || sum%2 !==0 || (!arr.includes(prime))){
      return false;
    }else if(sum%2 ===0){
      return true;
    }
  }

  console.log(isSumOfPrimeEven([1, 2, 3, 4, 5]));
  console.log(isSumOfPrimeEven([]));
  console.log(isSumOfPrimeEven([1, 6, 4, 8]));
  console.log(isSumOfPrimeEven([1, 2, 2, 4, 5]));

  // function isSumOfPrimeEven(arrr){
  //   let primeSum = 0;
  //   for(let num of arrr){
  //     if(isSumOfPrimeEven(num)){
  //       primeSum += num;
  //     }
  //   }
  //   return primeSum%2===0;
  //     }

  // function isPrime();