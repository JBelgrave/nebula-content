// .filter() Practice

/* Question 1
Write a function to filter an array for all the numbers greater than 5 */
const q1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function filterFive(arr) {
  return arr.filter(num => num > 5)
}
console.log(filterFive(q1Array))

/* Question 2
Write a function to filter an array for all the even numbers */
const q2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function filterEven(arr) {
  return arr.filter(num => num % 2 === 0)
}
console.log(filterEven(q2Array))

/* Question 3
Write a function to filter an array for all the non number item */
const q3Array = [1, 'a', 'b', 2, {}, []]
function filterNonNumber(arr) {
  return arr.filter(item => typeof item !== 'number')
}
console.log(filterNonNumber(q3Array))

/* Question 4
Write a function to filter an array of objects for people over the age of 21 */
const partyPeople = [
  { name: 'John', age: 25 },
  { name: 'Jordan', age: 18 },
  { name: 'Frank', age: 50 },
  { name: 'Anna', age: 12 }
]
function filterAge(arr) {
  return arr.filter(person => person.age > 21)
}
console.log(filterAge(partyPeople))

/* Question 5
Write a function to filter out all letters from a string
  Hint: filter doesn't work on strings.. */
function filterLetter(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const splitStr = str.split('')
  let emptyArr = []
  splitStr.forEach(item => {
    if (alpha.includes(item.toLowerCase())) {
      emptyArr.push(item)
    }
  })
  return emptyArr.filter(item => typeof item === 'string')
}

console.log(filterLetter('a1B2c3D4E5'))