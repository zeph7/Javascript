// JS Code explaination for === vs == operator

	// == operator (Equality) -- checks for equality of values on both sides
	// === operator (Identity) -- checks for identity of objects on both sides

console.log(2 == 2.0)		// o/p- true
console.log(2 === 2.0)	// o/p- true

obj1 = {}
obj2 = {}		// obj1 and obj2 are referencing to different objects
obj3 = obj1		// both obj1 and obj3 are referencing to the same object

console.log(obj1 === obj2) 	// o/p- false
console.log(obj1 === obj3)	// o/p- true