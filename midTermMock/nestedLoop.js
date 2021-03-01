//Multiplication table
for(let i = 1; i<=10; i++){
    let row="";
    for(let j=1; j<=10; j++){
    row += i*j +"\t";
    }
    console.log(row);
    }

    // rectangular numbers based on outer loop.
    for(let k = 1; k<=5; k++){
        let arr = "";
        for(let m = 1; m<=5; m++){
            arr = arr + k;
        }
        console.log(arr);
    }

    // rectangular numbers based on inner loop.
    for(let s = 1; s<=5; s++){
        let arr = "";
        for(let t = 1; t<=5; t++){
            arr = arr + t;
        }
        console.log(arr);
    }