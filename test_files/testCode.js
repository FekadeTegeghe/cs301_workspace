"use strict";
const prompt = require("prompt-sync")();
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
/**
 *
 * @param {array} arr1 is an array
 * @param {array} arr2 is an array
 * @returns {array} is an array
 */
/*function areArraysEqual(arr1, arr2){
  if(arr1.length === arr2.length){
    for(let i = 0; i<arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      }
    }
  }
  return true;
}
console.log(areArraysEqual([2, 3, 4], [2, 3, 4]));
console.log(areArraysEqual([2, 3, 4], [4, 3, 2])); */
/**
 *
 * @param {array} arr is a number
 * @returns {number} is a number
 */
/*function sumFirstLast(arr){
  let sumFL;
  for(let i = 0; i<arr.length; i++){
    sumFL = arr[0] + arr[arr.length -1];
  }
  return sumFL;
}
console.log(sumFirstLast([3, 6, 3, 4, 1, 11]));   */
/**
 *
 * @param {array} arr is an array
 * @returns {array}shifted is an array
 */
/*function rotatRight(arr) {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}
console.log(rotatRight([2, 3, 5, 7]));   */
/**
 *
 * @param {array} arr is an array
 * @returns {array} is an arry
 */
/*function rotatLeft(arr) {
  let first = arr.shift();
  arr.push(first);
  return arr;
}
console.log(rotatLeft([2, 3, 5, 7]));   */
/**
 *
 * @param {array} arr is an array
 * @param {number} num is a number
 * @returns {array} is an array
 */
/*function rotatLeft(arr, num) {
  for(let i = 0; i<num; i++){
  let first = arr.shift();
  arr.push(first);
  }
  return arr;
}
console.log(rotatLeft([2, 3, 5, 7], 3)); */
/**
 *
 * @param {string} str1 is a string
 * @param {string} str2 is a string
 * @returns {string} is a string
 */
/*function suffix(str1, str2){
  let j = 0;
  let common = "";
  for(let i = str1.length - 1; i>=0 ; i--){
      if(str1[i] === str2[str2.length - 1 - j]){
        common = common + str1[i];
      }else{
          break;
      }
      j++;
  }
  return common;
}
let str5 = "I love you";
let str4 = "I respect you";
console.log(suffix(str5, str4)); */
/**
 *
 * @param {array} arr is an array
 * @returns {number} is a number
 */
/*function getAverageOfEven(arr){
  let sum = 0;
  let count = 0;
  for(let i = 0; i<arr.length; i+=2){
    sum += arr[i];
    count++;
  }
  return sum/count;
}

console.log(getAverageOfEven([2, 3, 4, 5, 5, 6, 7])); //2+4+5+7=18  */

/**
 *
 * @param {string} str is a string
 * @returns {string} is a string
 */
/*function capitalizeInitials(str){   //good bad rich poor fast stagnant
  let arr = str.split(" ");
  let txt = "";
  for(let i = 0; i< arr.length; i++){
    txt = txt + " " + arr[i].charAt(0).toUpperCase() + arr[i].substring(1, arr[i].length);
  }
 return txt;
}
console.log(capitalizeInitials("good bad rich poor fast stagnant"));  */
/**
 * 
 * @param {array} arr is array
 * @param {number} elem is a number
 * @returns {array} is an array
 */
/*function deleteArrayElement(arr, elem){
  let newArr = [];
  let j = 0;
  for(let i = 0; i<arr.length; i++){
    if(i === elem){
      continue;
    }
    newArr[j] = arr[i];
    j++;
  }
 return newArr;
}
console.log(deleteArrayElement([2,3, 5, 6, 3, 7, 9], 4)); */
/**
 * 
 * @param {array} arr is an array
 * @param {number} elem is a number
 * @returns {array}is 
 */
/*function deleteArrayElement(arr, elem){
  let newArr = [];
  let j = 0;
  let count = 0;
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === elem){
      count++;
      if(count === 1) continue;
    }
    newArr[j] = arr[i];
    j++;
  }
 return newArr;
}
console.log(deleteArrayElement([2,3, 5, 6, 3, 7, 9], 3));*/
/**
 * 
 * @param {array} arr1 is arr
 * @param {array} arr2 is an array
 * @returns {boolean} is a bool
 */
/*function areArrayEqual(arr1, arr2){
   arr1.length === arr2.length;
   arr1.sort((aaa, bbb)=>bbb-aaa);
   arr2.sort((aaa, bbb)=>bbb-aaa);
  for(let i = 0; i<arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      }
  }
  return true;
}
console.log(areArrayEqual([2, 3, 2, 1], [1, 2, 5, 3]));   //7  */
/**
 * 
 * @param {number} result is a number
 * @returns {number} is
 */
/*function myDisplayer(result) {
  console.log(`Result of the calculation is ${result}`);
  }
  /**
   * 
   * @param {number} num1 is a numbe
   * @param {number} num2 is a numberr
   * @param {function} myCallback is a function
   * @returns {number} is
   */
  /*function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
  }
  myCalculator(5, 5, myDisplayer); */
 /**
 * 
 * @param {string} str1 is a string
 * @param {string} str2 is a string
 * @returns {boolean} true is a boolean
 */
/*function suffix(str1, str2){
  let j = 0;
  let common = "";
  for(let i = str1.length - 1; i>=0 ; i--){
      if(str1[i] !== str2[str2.length - 1 - j]){
          return common;
      }else{
          common = common + str1[i];
          common = common.split().reverse().join();
      }
      j++;
  }
 
}
let str5 = "I love you";
let str4 = "I respect you";
console.log(suffix(str5, str4)); */

/**
 * 
 * @param {number} input is a number
 * @returns {number} is a number
 */
/*function sumInput(input){
  input = +prompt("please input a number: ");
  let sum = 0;
  while(input){
    
    sum += input;
    input = +prompt("please input a number: ");
  }
  return sum;
}
console.log(sumInput());  */
/**
 * 
 * @param {array} arr is an array
 * @returns {number} is a num
 */
function getMaxSubSum(arr){
  let maxSubSum = 0;
  for(let i = 0; i<arr.length; i++){
    if(arr[i]>0){
      maxSubSum += arr[i];
    }
  }
  return maxSubSum;
}
console.log(getMaxSubSum([2, -3, 4, -7, 9, 3]));