// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
numArr[0] *= 10
console.log(numArr);

// Add an additional element to the prior array
numArr.push(15);
console.log(numArr);

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
const removedItem = numArr.pop();
console.log(removedItem);

// Check if the prior array contains the number 1
//   If it does, log true, if it doesnt, log false
numArr.includes(1) ? console.log("true") : console.log("false");

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
const removedFirstItem = numArr.shift();
console.log(numArr);

// Add that item back
numArr.unshift(removedFirstItem);
console.log(numArr);

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
console.log(sortThis.sort());

// Now reverse the prior array
console.log(sortThis.reverse());
  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
const favFoods = "Pineapple Pizza Pepporoni";

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']
const favSplice = favFoods.split(" ")

// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'
favSplice.join("-")
console.log(favSplice)

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
const numArr2 = [1,2,3,4,5,7,8,9,10];
const spliceNum = numArr2.splice(5);
numArr2.push(6);
const recom = numArr2.concat(spliceNum);
console.log(recom);

// Create two arrays and, using JavaScript join them together
const tempArr1 = ["a,b,c"]
const tempArr2 = [1,2,3]
const joined = tempArr1.concat(tempArr2)
console.log(joined)

// Create a multi-dimensional array
const multi = [[2,4,6,8,10], [1,3,5,7,9]];
console.log(multi);