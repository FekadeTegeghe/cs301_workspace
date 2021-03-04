let compute = function(add, num1, num2){
   add();
};

console.log(compute(add, 3, 3));

function add(a, b){
    return a + b;
}