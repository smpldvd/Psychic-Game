// List the array to choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Set all to starting position
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersPicked = [];
var winningLetter = [];


// Letters pick subtracts guesses
document.onkeyup = function (event) {

    // Pick a letter from the alphabet
    let computerChoice = letters[Math.floor(Math.random() * letters.length)];
    winningLetter.push(computerChoice);
    console.log(winningLetter);

    var inputKey = (event.key).toLowerCase();
    document.getElementById("letters").innerHTML = inputKey + ", ";
    console.log(inputKey)

    if ((inputKey === computerChoice) && (guessesLeft > 0)) {
        document.getElementById("wins").innerHTML = wins++;
        guessesLeft = 9;
        lettersPicked = [];
    }

    if (letters.indexOf(inputKey) === -1) return;
    
    else if ((inputKey !== computerChoice) && (guessesLeft > 0)) {
        document.getElementById("guessesLeft").innerHTML = guessesLeft--;
    }
    
    else {
        document.getElementById("losses").innerHTML = losses++;
        guessesLeft = 9;
        lettersPicked = [];
    }
}
