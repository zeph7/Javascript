// JS Code to explain the concept of Default Parameters in a Function


let userLogin = function(name = 'User_1') {		// here User_1 is the default value given to name parameter
	return `${name}! you successfully logged in... `
}

console.log(userLogin('Zeph'))
console.log(userLogin()) 	// In this case default parameters come into play