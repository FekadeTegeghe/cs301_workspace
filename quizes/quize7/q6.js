"use strict";
/**
 *
 * @param {array} number is an array
 * @returns {number} i is a number
 */
function findPorcupineNumber(number) {
  let maxvalue = 100000000000;
  for (let i = number + 1; i < maxvalue; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      } else if (i % 10 == 9) {
        return i;
      }
    }
  }
}

console.log(findPorcupineNumber(139));
