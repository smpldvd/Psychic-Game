// List the array to choose from
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Set all to starting position
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersPicked = [];
var winningLetter = computerChoice;

// Pick a letter from the alphabet
var compLetter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
winningLetter.push(compLetter);
console.log(winningLetter);

// Letters pick subtracts guesses
document.onkeyup = function (event) {
    var userKeyed = (event.key).toLowerCase();

    if ((userKeyed === compLetter) && (guessesLeft > 0)) {
        alert("You Win!");
        wins++;
        guessesLeft = 9;
        var newCompLetter = letterChoices[Math.floor(Math.random) * letterChoices.length];
        compLetter = newCompLetter;
    }
    else {
        guessesLeft--;
        document.getElementById("letters").innerHTML = "Your Guesses so far: " + userKeyed;
        if (guessesLeft > 0) {
            lettersPicked.push(userKeyed);
            document.getElementById("letters").innerHTML = "Your Guesses so far: " + list.toString() + " ";
        }
    }
    if (guessesLeft === 0) {
        alert("You lose! The correct letter was " + compLetter);
        losses++;
        guessesLeft = 9;
        var newCompLetter = letterChoices[Math.floor(Math.random) * letterChoices.length];
        compLetter = newCompLetter;
    }

    document.getElementById("wins").innerHTML = "Wins : " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses left : " + guessesLeft;

}
