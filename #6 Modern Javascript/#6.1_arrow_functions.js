// JS Code for Arrow Functions


// Normal Function
const sayHello = function(name) {
	return 'Hey there, ' + name + '!'
}

console.log(sayHello('Zeph'))


// Arrow Function
const sayHello2 = name => {
	return 'Hey there, ' + name + '!'
}

console.log(sayHello('Klaus'))

// If you have single return line in a block of code of an Arrow Function
// you can write it as:

const sayHello3 = name => `Hey there, ${name}!`

console.log(sayHello3('Saviour'))