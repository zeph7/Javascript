// JS Code to explain --- Objects ---


// Declaring an Object
let myYouTubeVideo = {
	// key: value pair
	title: 'Loops in javascript',
	videoLength: 15,
	videoCreator: 'Zeph',
	videoDescription: 'this is the video description'
}

console.log(myYouTubeVideo)

// Accessing object items
console.log(`Hey new video on ${myYouTubeVideo.title} by ${myYouTubeVideo.videoCreator}`)

myYouTubeVideo.title = 'forEach Loop in javascript'
console.log(myYouTubeVideo)
console.log(`Hey new video on ${myYouTubeVideo.title} by ${myYouTubeVideo.videoCreator}`)
