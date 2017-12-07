
//constructor function
function Letter(letter){
	this.show = false,//hide or show the letter on print
	this.value = letter,
	//return value or - base on the .show flag
	this.display = function(){
		if(this.show){
			return this.value;
		}
		else {
			return '-';
		}
	}
}


module.exports = Letter;