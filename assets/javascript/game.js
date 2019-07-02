$(document).ready(function() {

//set up variables for the counters
var wins = 0;
var loses = 0;
var crystalsRetrieved = 0;
var crystalBlue = computerParameters(1,12);
var crystalRed = computerParameters(1,12);
var crystalWhite = computerParameters(1,2);
var crystalYellow = computerParameters(1,12);
var computerChoice = computerParameters(19,120);

//set up function for random numbers from 19 to 120
//https://www.w3schools.com/js/js_random.asp
function computerParameters(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
console.log(computerChoice);



//set up click functions for each crystal. Similiar formula for each.
$("#crystalBlue").on("click", function(){
    crystalsRetrieved += crystalBlue;
    $("#crystalsRetrieved").text(crystalsRetrieved);   

  });

$("#crystalRed").on("click", function(){
    crystalsRetrieved += crystalRed;
    $("#crystalsRetrieved").text(crystalsRetrieved); 
});

$("#crystalWhite").on("click", function(){
    crystalsRetrieved += crystalWhite;
    $("#crystalsRetrieved").text(crystalsRetrieved);
});

$("#crystalYellow").on("click", function(){
    crystalsRetrieved += crystalYellow;
    $("#crystalsRetrieved").text(crystalsRetrieved);    

});











})