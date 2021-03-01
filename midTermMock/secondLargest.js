function secondLargest(a, b, c){
    if(a>b && a<c || a<b && a>c){
        return a;
    }else if(b>a && b<c || b < c && b > a){
        return b;
    }else{
        return c;
    }
}
console.log(secondLargest(-3,5, -1));