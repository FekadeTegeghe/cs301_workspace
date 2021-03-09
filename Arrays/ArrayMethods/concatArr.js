"use strict";
let arr = [1, 2];
let big =arr.concat([4, 5, 7, 2]);
console.log(big);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });