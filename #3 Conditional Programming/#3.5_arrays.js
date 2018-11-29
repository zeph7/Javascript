// JS Code for Arrays

// declaring an Array
const superHeros = ['Iron Man', 'Spiderman', 'Capt. America', 'Thor', 'Hawk Eye', 'Vision', 'Black Panther']

console.log(superHeros)  // prints whole array
console.log(superHeros[0])  // accessing element of an array 	
console.log(superHeros.length)  // gives length of array
console.log(superHeros[superHeros.length - 1])  // gives last element of the array

console.log(`We have ${superHeros.length} superHeros`)  // string interpolation

superHeros[2] = 'Captain America'  // to manipulate elements of the array
console.log(superHeros)
