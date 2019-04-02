$(document).ready(function() {

// selecting a random number for compGuess
var compGuess=Math.floor(Math.random()*81) + 19;

var playerWinsCounter = 0;
var playerLossesCounter = 0;

// this is writing new number to Appraiser's total
$("#appraiserTotal").text(compGuess);

// giving values to gem buttons
$(".crystalValue").attr("value", 15);
$(".crystalValue").attr("value", 5);
$(".crystalValue").attr("value", 1);
$(".crystalValue").attr("value", 10);

// new game fuction
function newGame() {
    $("#userApprasal") = 0,

}
// Crystal on click function
$(".Crystal").on("click", function() {
// Converts crystalValue to a number
crystalValue = parseInt(crystalValue);
// For every cyrstalValue clicked need to add to userAppraisal
userAppraisal += crystalValue;
// write to page
$("#userAppraisal").text(crystalValue);
});

// Game logic
if (userAppraisal === appraiserTotal) {
    playerWinsCounter++
    $("#playerWins").text(playerWinsCounter)
}
else (userAppraisal > appraiserTotal) {
    playerLossesCounter++
    $("#playerLosses").text(playerLossesCounter)
}
















// Do not delete closes document.ready
});