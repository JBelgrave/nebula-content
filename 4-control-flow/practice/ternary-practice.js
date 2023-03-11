// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number
const creditCardNum =  " 4567-4262-1711-7013 "

// Initialize a variable called last4SS, set it equal to a 4 string-numbers (dont use your real SS last 4!)
const last4ss = "7271"

// Initialize a variable called userId, set it equal to a fake user ID
const userId = "Udon"

// Initialize a variable called password, set it equal to a fake password
const password = "MadDog321"

// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password
const inputId = "Udon"
const inputPass = "MadDog321"

// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'
let check = (inputId === userId) && (inputPass === password) ? `${creditCardNum} ${last4ss}` : "Incorrect username or Id"
console.log(check);