"use strict";
//Multiplication table
for(let i = 1; i<=10; i++){
    let row="";
    for(let j=1; j<=10; j++){
    row += i*j +"\t";
    }
    console.log(row);
    }

    // rectangular numbers based on outer loop.
    for(let kit = 1; kit<=5; kit++){
        let arr = "";
        for(let mit = 1; mit<=5; mit++){
            arr = arr + kit;
        }
        console.log(arr);
    }

    // rectangular numbers based on inner loop.
    for(let sit = 1; sit<=5; sit++){
        let arr = "";
        for(let tim = 1; tim<=5; tim++){
            arr = arr + tim;
        }
        console.log(arr);
    }