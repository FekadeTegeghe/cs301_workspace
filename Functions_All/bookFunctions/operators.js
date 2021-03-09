"use strict";
// We define some simple functions here
/**
 * 
 * @param {number} x is a number
 * @param {number} y is a number
 * @returns {number} result is a number
 */
function add(x,y) { return x + y; }
/**
 * 
 * @param {number} x is a number
 * @param {number} y is a number
 * @returns {number} result is a number
 */
function subtract(x,y) { return x - y; }
/**
 * 
 * @param {number} x is a number
 * @param {number} y is a number
 * @returns {number} result is a number
 */
function multiply(x,y) { return x * y; }
/**
 * 
 * @param {number} x is a number
 * @param {number} y is a number
 * @returns {number} result is a number
 */
function divide(x,y) { return x / y; }

// Here's a function that takes one of the preceding functions
// as an argument and invokes it on two operands
/**
 * 
 * @param {string} operator is a string
 * @param {number} operand1 is a number
 * @param {number} operand2 is a number
 * @returns {number} is a number
 */
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

// We could invoke this function like this to compute the value (2+3) + (4*5):
let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));

// For the sake of the example, we implement the simple functions again,
// this time within an object literal;
const operators = {
    add:      (x,y) => x+y,
    subtract: (x,y) => x-y,
    multiply: (x,y) => x*y,
    divide:   (x,y) => x/y,
    pow:      Math.pow  // This works for predefined functions too
};

// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands. Note
// the syntax used to invoke the operator function.
/**
 * 
 * @param {*} operation 
 * @param {*} operand1 
 * @param {*} operand2 
 * @returns 
 */
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
        return operators[operation](operand1, operand2);
    }
    else throw "unknown operator";
}

operate2("add", "hello", operate2("add", " ", "world")) // => "hello world"
operate2("pow", 10, 2)  // => 100
