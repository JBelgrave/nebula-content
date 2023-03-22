// 1.   Create an object for a celebrity and save it to a variable
const celeb = {}

// 2.   Using dot-notation add 3 key-value pairs to the celebrity
 celeb.name = "Keanu Reeves"
 celeb.height = "6'1"
 celeb.weight = "~192 Pounds"

// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
celeb['age'] = 58
celeb['inRelationship'] = true
celeb['isCool'] = true

// 4.   Write a function that allows us to add or update 3 properties
function addUpdate(prop, value){
    celeb[prop] = value
}
addUpdate('age', 60)
addUpdate('inRelationship', false)
addUpdate('isCool', false)

// 5.   Using a loop - log all the celebrities properties to the console
for (const value of Object.entries(celeb)) {
    console.log(value[1]);
}