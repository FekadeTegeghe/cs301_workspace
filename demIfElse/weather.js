let prompt = require('prompt-sync')();
let weather = prompt("weather today: ");
if(weather === 'rainy'){

    console.log('Get an Umberella')
}
let num = +prompt('Please enter numbers between 1 and 10: ');

    if(num === 7){
        console.log('Bingo!')

    }else{
        console.log('try again.')
    }
