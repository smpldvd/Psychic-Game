// List the array to choose from
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Set all to starting position
var wins = 0;
var losses = 0;
var guessesLeft = 9;

gameStart();

// Letters pick subtracts guesses
function gameStart() {

    var lettersPicked = [];

    // Pick a letter from the alphabet
    var compLetter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    console.log(compLetter);
    document.onkeyup = function (event) {
        var userKeyed = (event.key).toLowerCase();
        if (letterChoices.includes(userKeyed)) {

            if ((userKeyed === compLetter) && (guessesLeft > 0)) {
                //alert("You Win!");
                wins++;
                guessesLeft = 9;
                var newCompLetter = letterChoices[Math.floor(Math.random) * letterChoices.length];
                compLetter = newCompLetter;
                gameStart();
            }
            else {
                guessesLeft--;
                document.getElementById("letters").innerHTML = userKeyed;
                if (guessesLeft > 0) {
                    lettersPicked.push(userKeyed);
                    document.getElementById("letters").innerHTML = lettersPicked.toString() + " ";
                }
            }
            
            if (guessesLeft === 0) {
                //alert("You lose! The correct letter was " + compLetter);
                losses++;
                guessesLeft = 9;
                var newCompLetter = letterChoices[Math.floor(Math.random) * letterChoices.length];
                compLetter = newCompLetter;
                gameStart ();
            }

            document.getElementById("wins").innerHTML = wins;
            document.getElementById("losses").innerHTML = losses;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;

        }
    }
}
