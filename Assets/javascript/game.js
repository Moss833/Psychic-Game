var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	document.onkeyup = function(event) {
	var userGuess = event.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


	if (userGuess === computerGuess) {
		wins++;
		alert('You win!');
		guessesLeft = 9;
		
	}
	else if (userGuess !== computerGuess) {
		guessesLeft--;
		
	}
	if (guessesLeft === 0) {
		guessesLeft = 0;
		losses++;
		alert('So Sad! You lose!');
		guessesLeft = 9;
		
				
		document.querySelector('#losses').innerHTML = "Losses: " + losses;
		computerChoices = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
	}



	var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + userGuess + "</p>"

        ;

        document.querySelector("#game").innerHTML = html;
}