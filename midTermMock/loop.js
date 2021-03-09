
"use strict";
for(let i=1; i<=10; i++){
    for(let j=i; j<=10; j++){
        if(j<=7){
        continue;
    }
        if(i*j>=16){
        break; // this break statement only breaks from the inner loop
    }
          console.log(j);
  }
    if(i === 3){
        break;
  }
    console.log(i);
}
//Answer
/*8
9
10
1
2 */