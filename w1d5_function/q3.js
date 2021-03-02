let volumeOfHouse;
let volumeOfLivingRoom;
let areaOfTriangle;
let volumeOfRoof;
function livingVolume(width, height, depth){
volumeOfLivingRoom = width*height*depth;
return volumeOfLivingRoom;
}
livingVolume(3, 5, 6);
function triangleArea(a, b, width){
let s = (a+b+width)/2;
areaOfTriangle = Math.sqrt(s*(s-a)*(s-b)*(s-width));
return areaOfTriangle;
}
triangleArea(5, 5, 3);
function roofVolume(depth){
volumeOfRoof = triangleArea()*depth;
return volumeOfRoof;
}
roofVolume(6);
function houseVolume(){
volumeOfHouse = livingVolume() + roofVolume();
return volumeOfHouse;
}
console.log(houseVolume());
