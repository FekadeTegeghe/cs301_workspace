"use strict";
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
    function findUnique(arr){   //????????????
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
    console.log(findUnique(unique));