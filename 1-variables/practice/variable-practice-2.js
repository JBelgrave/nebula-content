// Create a variable for each aspect of an address 
// First Name, Last Name, House-Number, Street-Name, City, State, Zip
// Combine them to be usable as a postage address

/*
First-Name Last-Name
House-Number, Street-Name 
City, State
Zip

Your log should look like this:

Steve Rogers
569, Amsterdam Ave
New York, NY
18062 
*/
const fName = "Judah"
const lName = "Belgrave"
const houseNum = 31
const street = "Hart Place"
const city = "Mastic"
const state = "New York"
const zip = 11950

const address = `${fName} ${lName} 
${houseNum}, ${street}
${city}, ${state}
${zip}`

console.log(address)