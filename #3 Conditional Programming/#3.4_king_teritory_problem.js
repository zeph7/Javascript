// JS Code --- King Teritory Problem ---


// case: 1

let king = 'john'
// if john is there, he will be the king of the teritory

if(true){
	let king = 'zeph'
	// if zeph is there, he will be king

	if(true){
		let king = 'klaus'
		// if klaus is there, he will be the king
		console.log(king)
	}
}

if(true){
	console.log('Second Part: ' + king)  // john is printed here
}


// case: 2

// let king = 'john'
// if john is there, he will be the king of the teritory

if(true){
	// let king = 'zeph'
	// if zeph is there, he will be king

	if(true){
		// let king = 'klaus'
		// if klaus is there, he will be the king
		king = 'klaus' // important: this will make king as Global Variable
		console.log(king)
	}
}

if(true){
	console.log('Second Part: ' + king)  // now klaus is printed here / difference
}


// summary: if u don't have a declaration of a variable, still u want
// to access it, u will be declaring a Global Variable there