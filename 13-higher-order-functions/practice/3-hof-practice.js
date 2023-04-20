// .map() Practice

/* Question 1
Using .map() create a new array that doubles all the numbers in a given array */
const numbers = [ 1, 2, 3, 4, 5 ]
const doubledNumbers = numbers.map(number => number * 2)
console.log(doubledNumbers)

/* Question 2
Using .map() create a new array that halves all numbers in a given array */
const halvedNumbers = numbers.map(number => number / 2)
console.log(halvedNumbers)

/* Question 3
Using .map() create a new array that squares all of the numbers in a given array */
const squaredNumbers = numbers.map(number => number * number)
console.log(squaredNumbers)


/* Question 4
Using .map() create a new array of all capital strings from an array of lower case strings */
const lowerCase = ['hello', 'world', 'how', 'are', 'you']
const upperCase = lowerCase.map(string => string.toUpperCase())
console.log(upperCase)




/* Question 5
Using .map() create a new array of greeting sentences from an array of given people
  Expected output:
    ['Hello Pamela', 'Hello Michael', 'Hello Angela'] */
const people = ['Pamela', 'Michael', 'Angela']
const greetings = people.map(name => `Hello ${name}`)
console.log(greetings) 
