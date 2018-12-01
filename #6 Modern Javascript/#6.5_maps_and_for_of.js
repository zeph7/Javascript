// JS Code for maps and for of loop

// maps can store key:value pair

var john = {
	name: 'I m john',
	age: 22,
	isActive: true
}
var sam = {
	name: 'I m sam',
	age: 25,
	isActive: true
}
var mack = {
	name: 'I m mack',
	age: 29,
	isActive: false
}

let users = new Map()

// sets key:value to the map
users.set('john', john)
users.set('sam', sam)
users.set('mack', mack)

console.log(users)
console.log(users.size)
console.log(users.get('sam'))
console.log(users.keys()) 	// gives iteratableIterator of keys
console.log(users.values()) 	// gives iteratableIterator of values

// how to iterate keys
for (const key of users.keys()){
	console.log(key)
}

// how to iterate throught both keys and values
for (const [key, value] of users.entries()){
	console.log(key + ' = ' + value.name)
}

// array of array can be converted to key:value pair by using map function
arrofarr = [['one', 1], ['two', 2], ['three', 3]]
let aoa = new Map(arrofarr)
console.log(aoa)