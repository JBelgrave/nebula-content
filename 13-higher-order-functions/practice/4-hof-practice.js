// .forEach Practice

/* Question 1
Given an array of numbers, log each number to the console. */
const numArray = [1, 2, 3, 4, 5]
numArray.forEach((number) => {
  console.log(number)
})

/* Question 2
Given an array of people, log a greeting to the console for each person. */
const people = ['Johnny', 'Jimmy', 'Jamie', 'Dean']
people.forEach((name) => {
  console.log(`Hello ${name}`)
})

/* Question 3
Given an array of mixed values, log whether or not each value is undefined. */
const mixed = [1, 'hello', undefined, true, null, false, 'world', undefined]
mixed.forEach((value) => {
    if(value === undefined){
        console.log(true)
    } else {
        console.log(false)
    }
})

/* Question 4
Given an array of strings, log the vowel count for each string. */
const arrayOfStrings = ['Hi!', '🎶', "It's", 'a', 'beautiful', 'day', 'in', 'the', 'neighborhood', '🎶']
arrayOfStrings.forEach((string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0
  string.split('').forEach((char) => {
    if (vowels.includes(char.toLowerCase())) {
      vowelCount++
    }
  })
  console.log(vowelCount)
})

/* Question 5
Given an array of numbers, double each of them and log them to the console */
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((number) => {
    console.log(number * 2)
})

