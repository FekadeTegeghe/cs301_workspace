function reverseDigits(n){
    let reversed = "";
    while(n>0){
        let lastDigit = n%10;
        reversed = reversed + lastDigit;
        n = Math.floor(n/10);
    }
    console.log(reversed);
}
reverseDigits(234567);