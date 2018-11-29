// JS Code for explaination to defining a function


let great = function (a, b) {
	if (a > b) {
		console.log(`${a} is greater than ${b}`)
	} else if (b > a){
		console.log(`${b} is greater than ${a}`)
	} else {
		console.log(`${a} equals to ${b}`)
	}
	return 0	// u can use return if u need it
}

great(2, 5)
great(9, 6)
great(7, 7)


	// How to define a function ?

// let nameOfFunction = function (variables_Passed) { --Block of Code-- }