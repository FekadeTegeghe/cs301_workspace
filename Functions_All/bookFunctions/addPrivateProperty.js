// This function adds property accessor methods for a property with
// the specified name to the object o. The methods are named get<name>
// and set<name>. If a predicate function is supplied, the setter
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.
//
// The unusual thing about this function is that the property value
// that is manipulated by the getter and setter methods is not stored in
// the object o. Instead, the value is stored only in a local variable
// in this function. The getter and setter methods are also defined
// locally to this function and therefore have access to this local variable.
// This means that the value is private to the two accessor methods, and it
// cannot be set or modified except through the setter method.
"use strict";
/**
 * 
 * @param {object} obj is an object 
 * @param {string} name is a string
 * @param {string} predicate is a string
 * @returns {string} value is a string 
 */
function addPrivateProperty(obj, name, predicate) {
    let value;  // This is the property value

    // The getter method simply returns the value.
    obj[`get${name}`] = function() { return value; };

    // The setter method stores the value or throws an exception if
    // the predicate rejects the value.
    obj[`set${name}`] = function(val) {
        if (predicate && !predicate(val)) {
            throw new TypeError(`set${name}: invalid value ${val}`);
        } else {
            value = val;
        }
    };
}

// The following code demonstrates the addPrivateProperty() method.
let obj = {};  // Here is an empty object

// Add property accessor methods getName and setName()
// Ensure that only string values are allowed
addPrivateProperty(obj, "Name", text => typeof text === "string");

obj.setName("Frank");       // Set the property value
obj.getName();               // => "Frank"
obj.setName(0);             // !TypeError: try to set a value of the wrong type
