// JS Code for some Array Methods

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers)

		// start methods

 // shifts the start of array
 // now first element i.e., Iron Man will be gone
console.log('The element gone is: ' + numbers.shift())  // like POP from start
console.log(numbers)

 // shifts back the start of array to a new element
 // now a new first element is inserted- '299'
console.log('The new size of Array is: ' + numbers.unshift('299'))  // like PUSH to start
console.log(numbers)


		// end methods

console.log('The element to be deleted is: ' + numbers.pop())  // POP from last
console.log(numbers)

console.log('The new size of Array is: ' + numbers.push('499'))  // PUSH to last
console.log(numbers)


		// middle methods

// splice(index, deleteCount, newElement)
// from index 3, it delete 2 elements and put a new element- '9999'
console.log('The deleted elements list is: ' + numbers.splice(3, 2, '9999'))
console.log(numbers)