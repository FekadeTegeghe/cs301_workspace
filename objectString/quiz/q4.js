"use strict";
let obj1 = {
    name: "A", 
    age: 5,
};
let obj2 = {
    name: "A", 
    age: 5,
};
/**
 * 
 * @param {object} obj1 is an object
 * @param {object} obj2 is an object
 * @param {object} prop is an object
 * @returns {object} is object
 */
function swapProps(obj1, obj2, prop){
    let temp = obj1[prop];
    obj1[prop] = obj2[prop];
    obj2[prop] = temp;
}
console.log(obj1, obj2);
swapProps(obj1, obj2, "age");
console.log(obj1, obj2);
