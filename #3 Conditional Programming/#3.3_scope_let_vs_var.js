// JS Code explaining concept of scope & stating difference between - let & var


	// global variable has scope throughout the code
let globalVariable = 'superman'

console.log(globalVariable)

if(true){
	globalVariable = 'flash'
	// local variable (with let keyword) has scope only inside its local scope
	let localVariable_1 = 'batman'
	// local variable (with var keyword) has scope outside its local scope too
	var localVariable_2 = 'aquaman'
}

console.log(globalVariable)
	// the next statement, if run will give an error as:
	// local variable is not accesible outside its local scope
// console.log(localVariable_1)
console.log(localVariable_2)