// JS Code to explain concept of method & function of this keyword

// this makes you refer to the properties of an object in which it is used
let myTodos = {
	day: 'Monday',
	meetings: 0,
	addMeeting: function(num){
		console.log(this)		// this here refers to all the properties of this current object --myTodos
	}
}

myTodos.addMeeting()


// --------------------

let myTodosZeph = {
	day: 'Monday',
	meetings: 0,
	addMeeting: function(num){
		this.meetings += num		// this.meetings here refers to the meetings property of this current object --myTodosZeph
	},
	meeting: function(){
		return `Zeph you have ${this.meetings} meetings today..`
	}
}

let myTodosKlaus = {
	day: 'Tuesday',
	meetings: 2,
	addMeeting: function(num){
		this.meetings += num		// this.meetings here refers to the meetings property of this current object --myTodosKlaus
	},
	meeting: function(){
		return `Klaus you have ${this.meetings} meetings today..`
	}
}

myTodosZeph.addMeeting(2)
console.log(myTodosZeph.meeting())
myTodosKlaus.addMeeting(4)
console.log(myTodosKlaus.meeting())