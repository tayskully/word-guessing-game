// DEPENDENCIES =======================
// start button
var startButton = document.querySelector("#startbutton");
//reset button
var resetButton = document.querySelector("#resetbutton");
//countdown
var timerEl = document.querySelector("#timer");
var displayEl = document.querySelector("#word-game")

// DATA =============================
// wins
var wins = 0;
// losses
var losses = 0;
//time left

// var blanks = 

var chosenWord = getChosenWord()

//FUNCTONS ==========================
function getChosenWord () {
    //get a word from the wordbank
    var wordBank = ["parentheses", "boolean", "scope", "modulus"]; 
var index = Math.floor(Math.random() * wordBank.length);
    return wordBank [index];
}

function generateBlanks() {
    blanks= [];
for (var i = 0; i < chosenWord.length; i++) blanks.push("_")
console.log(blanks);
}

//whole shebang
function playGame(event) {
event.preventDefault();
console.log("starting the game");
//get word from wordbank 

console.log("the chosen word is" + chosenWord)
//display teh blanks for the word 

}


//what happens when key is pressed
function handleKeyPress() {
  console.log("a key was pressed");
}// get the key that was pressed 
//is the key typed a letter in the word?
    //yes? replace any blanks with that letter
//does the string of blanks and guessed letters match the chosen word 
// yes? you win 
//display a win message
//stop the timer

function youLose () {
    //log a loss
    losses++; 
    //show a lose message
    displayEl.textContenet = "YOU LOSE!!! 😭"
}
function youWin () {
    //log a loss
    wins++; 
    //show a lose message
    displayEl.textContenet = "YOU WIN!!! 🤩"
}


// Sets timer for whole game
// need a timer for initial game play
function startTimer() {
  var timeLeft = 30;

  var timerInterval = setInterval(function () {
    timeLeft--;
    countDown.textContent = secondsLeft + "remaining";

    if (timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to stop game play and display a "you lose"
      endGame();
    }
  }, 1000);
  return timerInterval;
}
function endGame() {
  // stop the timer and stop the input and display sorry you lost or won message
}

//USER INTERACTIONS =================
//a user types a key...
document.addEventListener("keypress", handleKeyPress);

//a user clicks start
//start the timer
    // reset the starting time 
    // counts down every second
    // are we out of time? 
        //yes? you lose 
        //show a lose message
    //
startButton.addEventListener("click", playGame);

// a user hits button resets score
//

// INITIALIZATIONS ==================
// load wins/losses
