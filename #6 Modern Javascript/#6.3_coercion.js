// JS Code

// Coercion is like when JS tries to be smart and predict something

console.log('5' - 5) 	// JS assumes that subtraction would be of 2 no.'s only
// so it treat it as numbers and o/p--- 0

console.log('5' + 5) 	// here JS assumes that its string concatenation
// so its o/p--- 55
console.log(true + 1) 	// true in expression in js is considered as 1 and false as 0, o/p-- 2
console.log(false + 1)	// o/p-- 1

console.log(typeof '5')
console.log(typeof 5)
console.log(typeof {})

// values interpreted as false:---- false, 0, '', null, undefined