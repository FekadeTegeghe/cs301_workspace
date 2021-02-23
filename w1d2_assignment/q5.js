let prompt = require('prompt-sync')();
let lowestHeartBeatRate;
let fastestHeartBeatRate;
let age = +prompt('enter your age: ');
let maxHeartBeat = 220 - age;
fastestHeartBeatRate = 0.85*maxHeartBeat;
console.log(fastestHeartBeatRate);
lowestHeartBeatRate = 0.65*maxHeartBeat;
console.log(lowestHeartBeatRate);
