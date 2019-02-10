$(document).ready(function(){
// all jQuery methods go here...

// starter dance
$("#runningman-img").hover(enter, leave);
function enter(){
  this.src = "images/runningman-giphy.gif"
}
function leave() {
  this.src = "images/runningman-icon.png"
}

// Take the L
$("#taketheL-img").hover(enter1, leave1);
function enter1(){
  this.src = "images/taketheL-giphy.gif"

}
function leave1() {
  this.src = "images/taketheL-icon.png"
}

// Electroshuffle
$("#electroshuffle-img").hover(enter2, leave2);
function enter2(){
  this.src = "images/electroshuffle-giphy.gif"
}
function leave2() {
  this.src = "images/electroshuffle-icon.png"
}

// Bestmates
$("#bestmates-img").hover(enter3, leave3);
function enter3(){
  this.src = "images/bestmates-giphy.gif"
}
function leave3() {
  this.src = "images/bestmates-icon.png"
}



});
