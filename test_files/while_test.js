const prompt = require("prompt-sync")();
/*let i = 3;
while(i){  //this means while(i !==0)
    console.log(i);
    i--;
}

let j = 3;
while(j){  //this means while(i !==0)
    console.log(j--);
} */

let sum = 0;
while(true){
    let value = +prompt("enter a value: ");
    if(!value){
        break;
    }
    sum +=value;
}
console.log(sum);