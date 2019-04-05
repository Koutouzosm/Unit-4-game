$(document).ready(function() {

    // Global variables
var playerWinsCounter = 0;
var playerLossesCounter = 0;
var userAppraisal = 0;
// NEED TO MAKE THIS GLOBAL FOR MATH.RANDOM!!!
var compGuess;
    
// newGame function
function newGame() {
// selecting a random number for compGuess
compGuess=Math.floor(Math.random()*81) + 19;

// this is writing new number to Appraiser's total
$("#appraiserTotal").text(compGuess);

// setting userAppraisal back to 0 on newGame()
userAppraisal = 0;
//  must reset to page
$("#userAppraisal").text(userAppraisal)
    
}

// giving values to gem buttons
$(".crystalValue").attr("value", 15);
$(".crystalValue1").attr("value", 5);
$(".crystalValue2").attr("value", 1);
$(".crystalValue3").attr("value", 10);


// Crystal on click function
$(".crystal").on("click", function() {

// use jQuery to get valua of crystal clicked
var crystalValue = $(this).attr("value")

// Converts crystalValue to a number
crystalValue = parseInt(crystalValue);

// For every cyrstalValue clicked need to add to userAppraisal
userAppraisal += crystalValue;

// write to page
$("#userAppraisal").text(userAppraisal);

// Game logic goes here to know when  to check on click to check game instances
if (userAppraisal === compGuess) {

    // player win count increment
    playerWinsCounter++

    // write to page
    $("#playerWins").text(playerWinsCounter)

    // need to run reset after player wins
    newGame();
}

else if (userAppraisal > compGuess) {

    // player loss count decrement
    playerLossesCounter++

    // write to page
    $("#playerLosses").text(playerLossesCounter)

    // need to run reset after player losses
    newGame();
}

});

newGame()







// Do not delete closes document.ready
});