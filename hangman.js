var inquirer = require("inquirer");
var Game = require("./game.js");//module housing constuctor function
var game = new Game();////constructor for new Game object

console.log('\nGame started!\n');
startGame();//initialize first game


function startGame() {
	inquirer.prompt([
	{
		type:'rawlist',
		name:'category',
		message:'Please choose a category',
		choices: ['Presidents','NFL Teams']
	}
	]).then(function (input) {
	console.log('\n' + input.category + ' selected!\n');
	game.selectWord(input.category);
	game.word.printWord();
	playGame();//start asking for letters

	});

} 


function playGame() {
	inquirer.prompt([
	{
		type:'input',
		name:'guess',
		message:'Please choose a letter',
		validate:game.validateAsLetter,//make sure a letter is entered, done with method of Game object
		filter:function(guess){
			return guess.toUpperCase();//uppercase if it passes validation
		}

	}
	]).then(function (input) {
	var nextStage = game.checkGuess(input.guess);
	game.word.printWord();//always print results after a guess is made.  

	//logic for what to next after result is determined. 
	switch (nextStage) {
		case 'win':
			game.win();
			askToContinue();
			break;
		case 'loss':
			game.loss();
			askToContinue();
			break;
		default:
			playGame();
	}
	

	});

}

function askToContinue(){
	inquirer.prompt([
	{
		type:'rawlist',
		name:'continue',
		message:'Play again?',
		choices: ['Yes','No']
	}
	]).then(function (input) {
	
	if(input.continue == 'Yes'){
		game = new Game();//new instance of game object
		startGame();
	}
	else {
		console.log('\n Thanks for playing! \n');
		process.exit();//exit the app
	}

	

	});
}
