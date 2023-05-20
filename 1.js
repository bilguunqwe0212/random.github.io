// Define the questions and answers
var questions = ['Biggest Mammal?', 'Fastest vehicle?'];
var answers = ['Whale', 'Jet'];

// Choose a random question and answer
var index = Math.floor(Math.random() * questions.length);
var answer = answers[index].toUpperCase();

// Initialize the game state
var guesses = [];
var lives = 6;
var word = '';
for (var i = 0; i < answer.length; i++) {
	if (answer[i] === ' ') {
		word += '&nbsp;';
	} else {
		word += '_';
	}
}

// Update the HTML elements
document.getElementById('question').innerHTML = questions[index];
document.getElementById('word').innerHTML = word;
document.getElementById('guesses').innerHTML = 'Lives: ' + lives;

// Handle a guess
function guess() {
	var letter = document.getElementById('letter').value.toUpperCase();
	if (letter && answer.indexOf(letter) === -1 && guesses.indexOf(letter) === -1) {
		guesses.push(letter);
		lives--;
	}
	var newWord = '';
	for (var i = 0; i < answer.length; i++) {
		if (answer[i] === letter) {
			newWord += letter;
		} else if (answer[i] === ' ') {
			newWord += '&nbsp;';
		} else if (guesses.indexOf(answer[i]) !== -1) {
			newWord += answer[i];
		} else {
			newWord += '_';
		}
	}
	if (newWord === answer) {
		document.getElementById('word').innerHTML = newWord;
		document.getElementById('guesses').innerHTML = 'You win!';
		document.getElementById('letter').disabled = true;
	} else if (lives === 0) {
		document.getElementById('word').innerHTML = answer;
		document.getElementById('guesses').innerHTML = 'You lose!';
		document.getElementById('letter').disabled = true;
	} else {
		document.getElementById('word').innerHTML = newWord;
		document.getElementById('guesses').innerHTML = 'Lives: ' + lives;
	}
	document.getElementById('letter').value = '';
	document.getElementById('letter').focus();
}
