"use strict";
let x = 1;
let y = '2';
let z = true;
let s = x + y;
console.log(s)          // output? 12
console.log(typeof s)   // output? string
x = x + z;
console.log(x)          // output? 2
console.log(typeof x)   // output? number
y = x++ * y;            
console.log(y);         // output? 4
console.log(typeof y);  // output? number
s = parseInt(s)
s+='3';
console.log(s);         // output? 123
console.log(typeof s);  // output? string
z= !!s;
console.log(z);         // output? true
console.log(typeof z);  // output? boolean