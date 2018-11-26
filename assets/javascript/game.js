// =============================================
// On window load, computer gets a random letter.
// Player types a letter to see if it matches the computers letter.
// If letter is correct add 1 to wins column.
// If player answers incorrectly, decrement guesses left column, and display their incorrect guess in the letters guessed column.
// If player guesses nine incorrect letters, increment losses column by one.
// Then the computer gets another randomized letter and the guessed letters column gets reset.
// ==============================================
// Global Variables
// ================
var numWins = 0;
var numLosses = 0;
var numGuesses = 9;
var lettersGuessed = [];
var userGuess = "";
var generatedLetter = "";
var guessedArray = document.getElementById("guessedLetters");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("numGuesses");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Get random letter right away on page load.
randomLetter();

// Function to generate random letter that will be computer's guess.
function randomLetter() {
  generatedLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
  console.log("Random letter chosen: " + generatedLetter);
}

// Grabs user's key to connect to variable to be able to manipulate. Run game logic as soon as user presses a key.
document.onkeyup = function(event) {

  userGuess = event.key;
  console.log("User guess: " + userGuess);
  console.log("==========");
  lettersMatch();
}

function lettersMatch() {
  for (i=0; i< alphabet.length; i++) {
    if (userGuess === alphabet[i]) {
      if (userGuess === generatedLetter) {
        numWins++;
        wins.textContent = numWins;
        resetGame();
        console.log("yes");
        alert("Congratulations! You won!!")
      } else if(numGuesses > 0) {
        numGuesses--;
        console.log(numGuesses);
        lettersGuessed.push(userGuess);
        guessesLeft.textContent = numGuesses;
        guessedArray.textContent = lettersGuessed;
      } else {
        numLosses++;
        losses.textContent = numLosses;
        resetGame();
      }
    }
  }
}

function resetGame() {
  randomLetter();
  numGuesses = 9;
  lettersGuessed = [];
  guessesLeft.textContent = numGuesses;
  guessedArray.textContent = lettersGuessed;
}

