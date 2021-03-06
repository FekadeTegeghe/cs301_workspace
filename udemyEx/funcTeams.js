"use strict";
/**
 * 
 * @param {array} score1 is an array
 * @param {array} score2 is an array
 * @returns {boolean} 1 is a boolean 
 */
function calcAverage(score1, score2){
    let sumTeam1 = 0;
    let sumTeam2 =0;
    for(let i =0; i<score1.length; i++){
        sumTeam1+=score1[i];
        sumTeam2+=score2[i];
    }
    if(sumTeam1/score1.length >= 2*sumTeam2/score1.length){
        console.log(`team1 win ${sumTeam1/score1.length} Vs ${sumTeam2/score1.length} team2`);
        return 1;
    }else if(sumTeam2/score1.length >= 2*sumTeam1/score1.length){
        console.log(`team2 win ${sumTeam2/score1.length} Vs ${sumTeam1/score1.length} team1`);
        return 1;
    }else{
        console.log("Niether of the teams win");
        return 0;
    }
    
}
let score1 = [44, 23, 71];
let score2 = [65, 54, 49];
calcAverage(score1, score2);
console.log(calcAverage(score1, score2));