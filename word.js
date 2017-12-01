var letter = require("./letter.js");

function Word(word){
	this.letters = [];
	this.createWordArray = function() {
		word = word.split('');
		//console.log('Word to split: ' + word);
		for(i=0;i<word.length;i++){
			this.letters.push(new letter(word[i]));
		}
	},
	this.checkGuess = function(guess){
		//checker logic
		var resultMessage = "Sorry, incorrect.  Please try again";
		var win = true;
		for (i=0;i<this.letters.length;i++){
			if(this.letters[i].value == guess) {
				this.letters[i].show = true;
				resultMessage = 'Correct!';
				
			}
			if(this.letters[i].show == false){
				win = false;
			}
		}
		console.log(resultMessage);
		if(win == true){
			
			return false;

		}
		else {
			return true;
		}


	},
	this.printWord = function () {
		var printString = '';
		for (i=0;i<this.letters.length;i++){
			printString += '  ' + this.letters[i].display();
		}
		console.log('\n' + printString + '\n');
		//console.log(this.letters[0].display());
	}

}

module.exports = Word;