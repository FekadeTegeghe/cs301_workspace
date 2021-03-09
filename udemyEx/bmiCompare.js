"use strict";
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi =this.mass/Math.pow(this.height, 2);
        return this.bmi;
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height:1.95,
    calcBMI:function(){
        this.bmi =this.mass/Math.pow(this.height, 2);
        return this.bmi;
    }
};
john.calcBMI();
mark.calcBMI();
console.log(john.bmi, mark.bmi);
if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is heigher than ${john.fullName}'s BMI (${john.bmi})`);
}else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is heigher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
