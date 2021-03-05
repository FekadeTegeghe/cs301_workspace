"use strict";
let users = [
    { idNo: 1, name: "John" },
    { idNo: 2, name: "Pete" },
    { idNo: 3, name: "Mary" }
];

// returns array of the first two users
let someUsers = users.filter(item => item.idNo < 3);
console.log(someUsers);         //[{idNo:1, name:john}, {idNo:2, name:"pete"}]
console.log(someUsers.length); // 2
console.log(someUsers.name);        //undefined but why???