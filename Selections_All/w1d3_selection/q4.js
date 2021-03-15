"use strict";
const prompt = require("prompt-sync")();
let loanDuration;
let status = prompt('enter your status: ');
let overdueBooks = +prompt('what is the number of books overdue? ');
if(status==='student' && overdueBooks ==0){
loanDuration = 6 + ' weeks';
}else if((status === 'student' && overdueBooks < 3)||
        (status === 'other' && overdueBooks ==0)){
loanDuration = 4 + ' weeks';
}else if((status === 'student' || status == 'other') && 
        overdueBooks >=3){
loanDuration = 2 + ' weeks';
}else if(status === 'faculty' && overdueBooks ==0){
loanDuration = 12 + ' weeks';
}else if(status === 'faculty' && overdueBooks <3){
loanDuration = 10 + ' weeks';
}else if(status === 'faculty' && overdueBooks >=3){
loanDuration = 8 + ' weeks';
}else if(status === 'other' && overdueBooks <3){
loanDuration = 3 + ' weeks';
}
console.log('you can borrow for ' + loanDuration);
