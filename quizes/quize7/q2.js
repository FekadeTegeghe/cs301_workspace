"use strict";
/**
 * 
 * @param {array} arr is array 
 * @returns {boolean} true is boolean
 */
function isEvenDominated(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
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
isEvenDominated([ 22, -3, 26, -10, 34, 37 ]);
console.log(isEvenDominated([ 22, -3, 26, -10, 34, 37 ]));