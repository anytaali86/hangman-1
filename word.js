var letter = require("./letter.js");//constructor
function Word(word){
	this.letters = [];//will be an array of letter objects
	this.createWordArray = function() {
		word = word.split('');//overwrite the string with an array of letters
		for(i=0;i<word.length;i++){
			this.letters.push(new letter(word[i]));//create letter object for each letter in word array
		}
	},
	this.checkForLetter = function(guess){
		//checker logic
		var resultMessage = "Sorry, incorrect.  Please try again";//default message
		var letterIsCorrect = false;//default
		var win = true;//default
		for (i=0;i<this.letters.length;i++){
			if(this.letters[i].value == guess) {
				this.letters[i].show = true;//set show flag in letter object
				resultMessage = 'Correct!';
				letterIsCorrect = true;
				
			}
			//if at least one letter is not yet revealed, game is not won
			if(this.letters[i].show == false){
				win = false;
			}
		}
		console.log(resultMessage);

		var results = [letterIsCorrect,win];//return wheter letter is correct but also whether game has been won
		return results;



	},
	this.printWord = function () {
		var printString = '';
		for (i=0;i<this.letters.length;i++){
			printString += '  ' + this.letters[i].display();
		}
		console.log('\n' + printString + '\n');
	}
	

}
//don't see any advantage to protoype here, but it was part of instructions so I did it
Word.prototype.revealWord = function() {
	var printString = 'ANSWER:';
		for (i=0;i<this.letters.length;i++){
			printString += '  ' + this.letters[i].value;
		}
		console.log('\n' + printString + '\n');
}


module.exports = Word;