"use strict";
/* eslint-disable */

function swap(){
    let tmp = document.getElementById("c").value;
    document.getElementById("c").value = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = tmp;
   // let color=display.fontcolor("green");
}
window.onload=()=>{
    document.getElementById("go").onclick = swap;
}