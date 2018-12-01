// JS Code for playing with numbers


num = 22/7
console.log(num) 				// print a long decimal no., to cut it short see below
console.log(num.toFixed(2))		// toFixed is a method that fixes the no. to given decimal places, e.g- 2

console.log(Math.floor(num))	// floor is a method from Math library, used to bring deciaml like 3.14.. to 3 (lower bound)
console.log(Math.ceil(num))		// floor is also a method from Math library, used to bring deciaml like 3.14.. to 4 (upper bound)


// ----random method from Math library-----
// The Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) 
console.log(Math.random())

let upper = 25
let lower = 20

// Generates a random number between lower and upper
let myRandom = Math.floor(Math.random() * (upper - lower + 1) + lower)
console.log(myRandom)