// JS Code in which function takes object and returns object


let myYouTubeVideo1 = {
	title: 'Loops in javascript',
	videoLength: 15,
	videoCreator: 'Zeph',
	videoDescription: 'this is the video description'
}

let myYouTubeVideo2 = {
	title: 'Functions in javascript',
	videoLength: 10,
	videoCreator: 'Zeph',
	videoDescription: 'this is the video description'
}

// function that takes an object and returns an object
let changeVideoLength = function(myObject){
	return {
		format_1: `Time of the video is: ${myObject.videoLength + 1}`,
		format_2: `Time of the video is: ${myObject.videoLength + 2}`
	}
}

// object returned by the function is hold by a variable
let AddOne = changeVideoLength(myYouTubeVideo1)
console.log(AddOne)
console.log(AddOne.format_1)
console.log(AddOne.format_2)

let AddTwo = changeVideoLength(myYouTubeVideo2)
console.log(AddTwo)
console.log(AddTwo.format_1)
console.log(AddTwo.format_2)
