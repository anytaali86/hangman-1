var inquirer = require("inquirer");
var Game = require("./game.js");
var game = new Game();


console.log('');
console.log('Game started!');
console.log('');

//game.getWordOptions('presidents');
game.selectWord('presidents');

//console.log('Category: Presidents (last name only)');

// game.word.checkGuess(guess);


function playGame() {
	inquirer.prompt([
	{
		type:'input',
		name:'guess',
		message:'Please choose a letter',
		validate:game.validateAsLetter,
		default:'default message',

		filter:function(guess){
			return guess.toUpperCase();
		}

	}
	]).then(function (input) {
	var keepGoing = game.word.checkGuess(input.guess);
	game.word.printWord();
	if(keepGoing){
		playGame();
	}
	else {
		game.win();
	}
	

	});

}

//playGame();