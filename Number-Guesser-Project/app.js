// Game values
let min = 1,
		max = 10,
		winningNumber = getRandomNumber(min, max),
		guessesLeft = 3;

// UI Elements
const gameEl = document.querySelector('#game'),
			minNumberEl = document.querySelector('.min-number'),
			maxNumberEl = document.querySelector('.max-number'),
			guessBtn = document.querySelector('#guess-btn'),
			guessInput = document.querySelector('#guess-input'),
			guessMessage = document.querySelector('.message');

// assign the min and max in the corresponding spans
minNumberEl.textContent = min;
maxNumberEl.textContent = max;

// play again event listener
gameEl.addEventListener('mousedown', function(e){
	//only occur if we're triggering our play again button
	// using mousedown so that we don't immediately trigger - click treats mousedown and release as separate clicks
	if(e.target.classList.contains('play-again')) {
		//reload the page
		window.location.reload();
		console.log('reloading');
	}
});

// GENERATE WINNING NUMBER
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max-min+1)+min);
}

// create the event listener for our button
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);

	// validate input - not empty, less than

	// check for win cases
	if(guess === winningNumber) {
		// GAME OVER - WON
		endGame(true, `${winningNumber} is correct! You WIN!`)
	} else {
		guessesLeft -= 1;

		if(guessesLeft === 0){
			// GAME OVER - LOST
			endGame(false, `Game over, you lost :( The correct number was ${winningNumber}.`)
		} else if (isNaN(guess) || guess < min || guess > max) {
			setMessage(`Please enter a number between ${min} and ${max}`, 'red');
		} else {
			// GAME CONTINUES
			guessInput.style.borderColor = 'red';
			guessInput.value = '';
			setMessage(`Sorry, ${guess} is incorrect. You have ${guessesLeft} guesses left`, 'red');
		}
	}
});

function endGame(won, msg){
		let color;
		// SET THE BORDER COLOR
		won === true ? color = 'green' : color = 'red';

		// DISABLE INPUTS
		guessInput.disabled = true;
		guessBtn.disabled = true;


		setMessage(msg, color);

		// set value and class name for PLAY AGAIN
		guessBtn.value = 'Play Again'
		guessBtn.classList.add('play-again');

		// new version of button needs new event listener, so we need to add a class
		// we need to add listener to parent since the element was created AFTER load

}

function setMessage(msg, color) {
	guessMessage.style.color = color;
	guessMessage.textContent = msg;
}
