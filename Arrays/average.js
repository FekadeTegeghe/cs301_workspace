let sum = 0;
function getAverage(arr){
    for(let i =0; i<arr.length; i++){
        sum += arr[i];
        }
        return sum/arr.length;
}
let average = getAverage([10, 20, 30, 40, 50])
console.log(average);   

let arr1 = [];
let sum1 = 0;
for(let j = 0; j<10; j++){
    arr1[j] = Math.floor(Math.random()*10);
    sum1+=arr1[j];
}
console.log(arr1);
let avg = sum1/arr1.length;
console.log(avg);