// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'
console.log(noCaps.toLowerCase())

// Turn the following string into all uppercase letters
const loud = "i'm very loud!";
console.log(loud.toUpperCase())

// Join the prior two variables together.
 console.log(noCaps.concat(" " + loud))


// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
console.log(stringOfNames.split(` `))

// Make your own mad-libs using a template literal
let adjective = "delicious"
let food = "burger"
const template = `I could really go for a ${adjective} ${food}`
console.log(template)

// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
let initial = ironMan[0] + ironMan[5]
console.log(initial)

// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
let aStar = string.slice(19, 27)
console.log(aStar)

// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
let qMark = string1[11]
console.log(qMark)
// const lastIndex = string1.length - 1
// const lastChar = string1[lastIndex]

// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';

console.log(parseInt(ten) + parseInt(five))

// Given the following sentence, turn it into an array.
const sentence = 'Welcome to the jungle!'; 
console.log(sentence.split(' '))