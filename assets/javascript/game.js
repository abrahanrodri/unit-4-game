$(document).ready(function() {

//set up variables for the counters
var wins = 0;
var losses = 0;
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
console.log("Computer Choice: " + computerChoice);
$("#computerChoice").html(computerChoice);


//set up click functions for each crystal as value as assigning it a random value. Similiar formula for each.
$("#crystalBlue").on("click", function(){
    crystalsRetrieved += crystalBlue;
    $("#crystalsRetrieved").text(crystalsRetrieved); 
    results();  

  });

console.log("Crystal Blue value: " + crystalBlue);

$("#crystalRed").on("click", function(){
    crystalsRetrieved += crystalRed;
    $("#crystalsRetrieved").text(crystalsRetrieved); 
    results();
});

console.log("Crystal Red value: " + crystalRed);

$("#crystalWhite").on("click", function(){
    crystalsRetrieved += crystalWhite;
    $("#crystalsRetrieved").text(crystalsRetrieved);
    results();
});

console.log("Crystal White value: " + crystalWhite);

$("#crystalYellow").on("click", function(){
    crystalsRetrieved += crystalYellow;
    $("#crystalsRetrieved").text(crystalsRetrieved);
    results();

});

//I'm trying to reset but I can't quite get the game to reset
function reset(){
  crystalsRetrieved = 0;
  crystalBlue = computerParameters(1,12);
  crystalRed = computerParameters(1,12);
  crystalWhite = computerParameters(1,2);
  crystalYellow = computerParameters(1,12);
  
  computerChoice = computerParameters(19,120); 
  $("#computerChoice").html(computerChoice);
}

console.log("Crystal Yellow value: " + crystalYellow);

//console log wont update as Im using it in the game. Maybe it won't allow it?
//console.log("Crystals Retrieved: " + crystalsRetrieved);


//acknowledges a win but since I can't get it to reset, it won't reset the game
function results(){
  if (crystalsRetrieved === computerChoice){
    wins += 1;
    alert("wins!  :)");
    $("#wins").text(wins);
    reset();
  }
  else if (crystalsRetrieved > computerChoice){
    losses +=1;
    alert("losses! :(");
    $("#losses").text(losses);
    reset();
  }
}

});