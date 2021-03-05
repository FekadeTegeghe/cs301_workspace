/* eslint-disable valid-jsdoc */
"use strict";
/**
 * 
 * @param {number} op1 
 * @param {number} op2 
 * @param {number} sum
 */
function add(op1, op2) {
    return op1 + op2;
}

/**
 * 
 * @param {number} op1 
 * @param {number} op2 
 * @param {number} difference
 */
function sub(op1, op2) {
    return op1 - op2;
 
}

/**
 * 
 * @param {number} op1 
 * @param {number} op2 
 * @param {number} quotient
 */
function div(op1, op2) {
    return op1/op2;
    
}

module.exports = {add, sub, div};