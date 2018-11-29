// JS Code for explaining --- forEach Loop ---


const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

// forEach Loop
days.forEach(function (day, index){
	console.log(`Day ${index + 1} -- ${day}`)
})

	// How does a forEach Loop works ?

// array.forEach( function (arrayElements, arrayIndex) {-- Block of Code --})
// its process for each array element and can pass on that element and its
// index to the function inside parenthesis