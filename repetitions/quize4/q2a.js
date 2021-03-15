"use strict";
for(let i=1; i<10; i++){
    if(i%3===0) break;
    console.log(i);
   }   // 1, 2 is the output
   
   for(let i=1; i<10; i++){
    if(i%3===0) continue;
    console.log(i);
   }      // 1, 2, 4, 5, 7, 8,