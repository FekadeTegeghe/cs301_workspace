//Question 1
let volumeInLiter;
const CHANGE_FACTOR = 0.946;
let volumeInQuarts = prompt('please input volume in quarts?');
volumeInLiter = CHANGE_FACTOR*volumeInQuarts;
console.log(volumeInLiter);