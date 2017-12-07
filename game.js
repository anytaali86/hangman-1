var Word = require('./word.js');//returns constructor for the individual word


var presidents = ["WASHINGTON","ADAMS","JEFFERSON","MADISON","MONROE","JACKSON","HARRISON","TYLER","POLK","TAYLOR","FILLMORE","PIERCE","BUCHANAN","LINCOLN","JOHNSON","GRANT","HAYES","GARFIELD","ARTHUR","CLEVELAND","HARRISON","MCKINLEY","ROOSEVELT","TAFT","WILSON","HARDING","COOLIDGE","HOOVER","TRUMAN","EISENHOWER","KENNEDY","JOHNSON","NIXON","FORD","CARTER","REAGAN","BUSH","CLINTON","OBAMA","TRUMP"];
var teams = ["COWBOYS","GIANTS","EAGLES","REDSKINS","BILLS","DOLPHINS","PATRIOTS","JETS","CARDINALS","RAMS","SEAHAWKS","BRONCOS","CHIEFS","CHARGERS","RAIDERS","BEARS","LIONS","PACKERS","VIKINGS","RAVENS","BENGALS","BROWNS","STEELERS","FALCONS","PANTHERS","SAINTS","BUCCANEERS","TEXANS","COLTS","JAGUARS","TITANS"];

//constructor function for master Game object
function Game() {
	this.guessesRemaining = 6,
	this.selectWord = function(category){
		var wordOptions;
		//select which array to choose a word from
		switch (category) {
			case 'presidents':
				wordOptions = presidents;
				break;
			case 'NFL Teams':
				wordOptions = teams;
				break;
			default:
				wordOptions = presidents;
		}
		//pick random word
		var wordString = wordOptions[Math.floor(Math.random()*wordOptions.length)];
		var word = new Word(wordString);//create a Word, pass in string
		word.createWordArray();//return an array of letter objects
		this.word = word;//set the word object as name/value pair within Game
	},
	this.checkGuess = function(guess){
		var results = this.word.checkForLetter(guess);
		var letterCorrect = results[0];//is the letter correct
		var win = results[1];//is there a win
		
		if(win==true){
			return 'win';
		}
		else if(letterCorrect == false){
			this.guessesRemaining --;
			if(this.guessesRemaining == 0){
				return 'loss';
			}
			console.log("\nGuesses Remaining: " + this.guessesRemaining);
		}
		else  {
			return;
		}
		

	},
	this.word = {},
	this.validateAsLetter = function(guess){
		var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		if(alphabet.includes(guess) && guess.length == 1){
			return true;
		}
		else {
			return 'UNACCEPTABLE!';
		}
	},
	this.win = function (){
		console.log('\nYou win!\n');
	},
	this.loss = function () {
		console.log('\nYou lose!\n');
		this.word.revealWord();
	}



}

module.exports = Game;

