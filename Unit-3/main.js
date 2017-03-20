//Let's Play Rock, Paper, Scissors!
//Global Variables
var userChoice;
var computerChoice;
var winner;
var playerRunningTotal;
var computerRunningTotal;

function getPlayerMove(){
	userChoice = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  console.log(userChoice);
  return userChoice;
};
getPlayerMove();

var getComputerMove = function(){
  var randomNumber =  Math.random();
  if (randomNumber <= 0.33) {
    computerChoice = "rock";
  } else if (randomNumber < 0.66 && randomNumber > 0.33) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
         }
  return computerChoice; // remember to return this value
};

getComputerMove();


/** why can't I pass userChoice and computerChoice as the params to compare
 in the getWinner function **/
var getWinner = function(playerMove, computerMove){
  if (playerMove === computerMove) {
    // if this was var winner it would shadow the global variable winner
    winner = 'tie';
  } else if (playerMove === 'rock' && computerMove === 'scissors' ||
    playerMove === 'paper' && computerMove === 'rock' ||
    playerMove === 'scissors' && computerChoice === 'paper'
  ) {
    winner = 'player';
  } else {
    winner = 'computer';
  }
  return winner;
};

/** oh wait is it because getWinner is actually called with the userChoice and
computerChoice params in the playToFive function? **/


// why function declaration instead of expression?
function playToFive(){
   console.log("Let's play Rock Paper Scissors");
   playerRunningTotal = 0;
   computerRunningTotal = 0;
   	while (playerRunningTotal < 5 && computerRunningTotal < 5) {
    userChoice = getPlayerMove();
    computerChoice = getComputerMove();
    winner = getWinner(userChoice, computerChoice);
      if (winner === 'player') {
        playerRunningTotal++;
      } else if (winner === 'computer') {
        computerRunningTotal++;
      }
    alert("Player chose " + userChoice + " while Computer chose "
+ computerChoice + "! \nThe score is Player "+ playerRunningTotal
+ ", Computer " + computerRunningTotal + ".");
    }
 }
 playToFive();
