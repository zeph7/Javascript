// JS Code for Logical Operators


	// && - AND operator - Both sides need to be true
	// || - OR operator - One side need to be true

var isVerified = true
var isLoggedIn = true
var hasPaymentToken = true
var isGuest = true

if(isVerified && isLoggedIn && hasPaymentToken){
	console.log('Greeting message to the user...')
	console.log('Grant Access to all stuff on the Website !!')
}
else if (isVerified || isGuest){
	console.log('Allow free previews')
}
else{
	console.log('MESSAGE: Please contact admin')
}