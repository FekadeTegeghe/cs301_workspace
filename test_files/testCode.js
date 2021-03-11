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
function funX(a, b) {
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
    main();