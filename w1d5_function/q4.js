function computeHCF(num1, num2) {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(num2) {    //this is equivalent to while(num2 !==0). We can also start with num1.
      var t = num2;
      num2 = num1 % num2;
      num1 = t;
    }
    return num1;
  }
  console.log(computeHCF(15, 35));

  //Using function Expression
  let computeGCD = function(a, b){
    while(a) {    
        var k = a;
        a = a % b;
        b = k;
      }
      return b;
    }
    console.log(computeHCF(315, 35));
  