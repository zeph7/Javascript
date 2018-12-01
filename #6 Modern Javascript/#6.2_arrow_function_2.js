// JS Code for Arrow Function Application

const todo = [{
	title: 'bring bread',
	isdone: true
}, {
	title: 'go to gym',
	isdone: true
}, {
	title: 'write code',
	isdone: false
}]


// Arrow function to return todos from list which are done
const thingsDone = todo.filter((todo) => todo.isdone == true)
console.log(thingsDone)

// Note:----
// filter loops to each item in todo list and filter with the condition given to it
// **this keyword can't be used directly with Arrow Function