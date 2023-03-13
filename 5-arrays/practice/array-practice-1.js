// Declare an empty array
const emptyArray = [1]
console.log(emptyArray)

// Declare an array with all the data types you can think of within it
const Array1 = [10, 'Ten', true, [1,2,3], BigInt, null, undefined, {}]
console.log(Array1)

// Make a list of classmates names first names in an array
// Get the length of that previous array
const nameArray = ['Abdel', "Asadur", 'Aulexis', 'Dayana', 'Donald', 'Judah', 'Juliet', 'Matt']
const lengthOfNameArray = nameArray.length
console.log(lengthOfNameArray)

// Check the type of the previous array
console.log(typeof nameArray)

// Check if the previous array is an array
console.log(Array.isArray(nameArray))

// Using indexing, grab your name from that previous array
const myIndex = nameArray[5]
console.log(myIndex)

// Use the following variable to get the student at the index from the array of students
let index = 2; 
console.log(nameArray[index])

// Update the array to have each element as a students first and last name : 'firstName lastName'
//Besard Rahman Rochell Senat Williams Vorbe Reilly
nameArray[0] = nameArray[0] + " " + 'Besard'
nameArray[1] = 'Asadur Rahman'
nameArray[2] = 'Aulexis Rochell'
nameArray[3] = 'Dayana Senat'
nameArray[4] = 'Donald Williams'
nameArray[5] = 'Judah Belgrave'
nameArray[6] = 'Juliet Vorbes'
nameArray[7] = 'Matt Reilly'
console.log(nameArray)