
function reverse(num){
    let reversedDigits = "";
    while(num>0){
        let lastDigit = num%10;
        reversedDigits = reversedDigits + lastDigit;
        num = Math.floor(num/10); 
    }
    return Number(reversedDigits);
}
console.log(reverse(123));

function isPrime(num){
    for(let i = 2; i<num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));

function isReversedPrime(num){
    let reversedNum = reverse(num);
    let result =isPrime(reversedNum);
    return result;
}
console.log(isReversedPrime(35));
