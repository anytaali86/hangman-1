var Word = require('./word.js');
var fs = require('fs');

function Game() {
	this.guessesRemaining = 10,
	this.getWordOptions = function(category){
		fs.readFile('./' + category + '.txt','utf8', function(err, data) {
	  		if (err) throw err;
	  		//console.log(data.split(','));
	  		return data.split(',');
		});
	},
	this.selectWord = function(category){
		var wordOptions;
		fs.readFile('./' + category + '.txt','utf8', function(err, data) {
	  		if (err) throw err;
	  		//console.log(data.split(','));
	  		console.log('?');
	  		wordOptions = data.split(',');
		});
		var wordString = wordOptions[Math.floor(Math.random()*wordOptions.length)];
		var word = new Word(wordString);
		word.createWordArray();
		console.log('Word Selected');
		console.log(wordString);
		//console.log(word.letters[0]);
		this.word = word;
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
	}



}

module.exports = Game;