function reverseDigits(n){
    let reversed = "";
    while(n>0){
        let lastDigit = n%10;
        reversed = reversed + lastDigit;
        n = Math.floor(n/10);
    }
    console.log(reversed); //123 = 1*10^2 + 2*10^1 + 3*10^0
}
reverseDigits(234567); 

//version II
function reverseDigits(n){
    let reversed = 0;
    while(n>0){
        let lastDigit = n%10;
        reversed = reversed*10 + lastDigit;
        n = Math.floor(n/10);
    }
    return reversed; //123 = 1*10^2 + 2*10^1 + 3*10^0
}
console.log(reverseDigits(234567));