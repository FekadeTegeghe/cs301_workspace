//a. area of a circle
const prompt = require("prompt-sync")();
let r = prompt('Please input radius: ');
let a;
function area(r){
a = Math.PI*r**2;
return a;
}
console.log(area(r));
console.log("-----------------");
// b.	Cylinder – nice working code
let h = prompt('Please input height of cylinder: ');
let v;
function cylinderVolume(h){
v = area(r)*h;
return v;
}
console.log(cylinderVolume(h));
