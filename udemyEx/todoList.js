"use strict";
const prompt = require("prompt-sync")();
let input = prompt("what would you like to do?: ");
const arr = [
  "Add A Todo",
  "List All Todos",
  "dRemove Specific Todo",
  "Quit App",
];
while (input.toLowerCase() !== "quit") {
  if (input === "list") {
    console.log("*****************");
    for (let i = 0; i < arr.length; i++) {
      console.log(`${i}: ${arr[i]}`);
    }
    console.log("******************");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?: ");
    arr.push(newTodo);
    console.log(`${newTodo} added to the list.`);
  } else if (input === "delete") {
    const index = +prompt("Ok, enter an index to delete: ");
    if (!Number.isNaN(index)) {
      const deleted = arr.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("what would you like to do?: ");
}
console.log("Quit App");
