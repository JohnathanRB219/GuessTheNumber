// var boom contains the formula for a random number to be generated
	var boom = Math.floor(Math.random() * 100 ) + 1;

		console.log(boom);



		 // var guesses starting at 1 
	var guesses = 1;

	console.log(guesses);


// var tries conatining how many times someone can try anf guess the number
	var tries = 10;

	console.log(tries);



// calling the function from the HTML using genGuess
function genGuess() {

	
	// putting my Id in a var to get the value 
	var guess = document.getElementById("numGuessing").value;

	console.log(guess);


	document.getElementById("guessCount").textContent = guesses;

	

	// checking to see if the guess is equal random number
	if ( guesses > tries ) {

		return alert("You Lose");
	}else {
		if (guess == boom) {
			return alert("YOU WIN" );
		} else if (guess > boom) {
 			guesses ++
			return console.log("Guess Lower"); 
		} else  {
			guesses ++
			return console.log("Guess Higher");

		};
		
	};
	


}

