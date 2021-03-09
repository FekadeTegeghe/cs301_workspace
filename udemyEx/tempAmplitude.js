//Given array of daily temperature. Find amplitude of the temp.
// find max temp, min temp, difference b/n max & min (Amplitude)
"use strict";
/**
 * 
 * @param {array} temp is an array 
 * @returns {number} amplitude is difference between max & min
 */
function findAmplitude(temp){
    let max = temp[0];
    let min = temp[0];
    for(let i =0; i < temp.length; i++){
        const currTemp = temp[i];
        if(typeof currTemp != "number") continue;
        if(currTemp > max) max = currTemp;
       if(currTemp < min) min = currTemp;
        }
        console.log(max, min);
        return max - min;
}
let temp = [10, -3, 15, 28, 31, 13, 78];
findAmplitude(temp);
console.log(findAmplitude(temp));