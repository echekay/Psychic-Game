// =============================================
// On window load, computer gets a random letter.
// Player types a letter to see if it matches the computers letter.
// If letter is correct add 1 to wins column.
// If player answers incorrectly, decrement guesses left column, and display their incorrect guess in the letters guessed column.
// If player guesses nine incorrect letters, increment losses column by one.
// Then the computer gets another randomized letter and the guessed letters column gets reset.
// ==============================================
window.onload = function() {

  // console.log(randomLetter);
  // lettersMatch(userGuess);
}

var numWins = 0;
var numLosses = 0;
var numGuesses = 9;
var lettersGuessed = [];
var userGuess = "";
var guessedArray = document.getElementById("guessedLetters");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("numGuesses");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Function to generate random letter that will be computer's guess

var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log("Random letter chosen: " + randomLetter);


document.onkeyup = function(event) {

  userGuess = event.key;
  guessedArray.textContent = userGuess;
  console.log("User guess: " + userGuess);
  console.log("==========");

  function lettersMatch(letter) {

  if (letter === randomLetter) {
    numWins++;
    wins = numWins;
    resetGame();
  } else {
    numGuesses--;
    lettersGuessed.push(letter);
  }
}
}


function resetGame() {

}

