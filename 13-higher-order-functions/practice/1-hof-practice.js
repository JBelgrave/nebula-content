/* Question 1
Write a higher-order function which takes in two numbers and performs a calculation with them
Write the callback functions separately
  Example:
    calculate(multiply, 2,4) => 8
    calculate(subtract, 2,4) => -2
    calculate(exponent, 2,4) => 16   
*/

// function calculate(calc, num1, num2) {
//   const result = calc(num1, num2)
//   return result
// }

// function multiply(num1, num2) {
//   return num1 * num2
// }
// function subtract(num1, num2) {
//   return num1 - num2
// }
// function exponent(num1, num2) {
//   return num1 ** num2
// }

// console.log(calculate(multiply, 2, 4))
// console.log(calculate(subtract, 2, 4))
// console.log(calculate(exponent, 2, 4))

/* Question 2
Write a function that takes in any number of numbers and performs calculations on them
console.log(arguments) inside of a function to visualize your arguments
Write the callback functions separately
  Example:
    calculateAll(multiply,[1,4,1,231,5]) => 4620
    calculateAll(subtract, [2,4,5,7]) => -14
*/

// function calculate(calc, numbers) {
//   console.log(numbers)
//   let result = numbers[0]
//   for (let i = 1; i < numbers.length; i++) {
//     result = calc(result, numbers[i])
//   }
//   return result
// }

// function multiply(a, b) {
//   return a * b
// }
// function subtract(a, b) {
//   return a - b
// }

// console.log(calculate(multiply, [1, 4, 1, 231, 5]))
// console.log(calculate(subtract, [2, 4, 5, 7]))

/* Question 3
Write a function that takes in a string and performs some form of manipulation on it
  Example:
    modify(yeller, 'I need a nap') => I NEED A NAP!!!
    modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
    modify(code, 'There is no cake') => Th-r- -s n- c-k-
*/

// function modify(func, str) {
//   return func(str)
// }

// function yeller(str) {
//   return str.toUpperCase() + '!!!'
// }
// function sarcastic(str) {
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       result += str[i].toUpperCase()
//     } else {
//       result += str[i].toLowerCase()
//     }
//   }
//   return result
// }
// function code(str) {
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//       result += '-'
//     } else {
//       result += str[i]
//     }
//   }
//   return result
// }

// console.log(modify(yeller, 'I need a nap'))
// console.log(modify(sarcastic, 'I really like running'))
// console.log(modify(code, 'There is no cake'))

/* Question 4
Write a function that takes in an array filled with different data types and returns each data type
  Examples:
    oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['I love coding, 'goosfraba']

    oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['Nested Array!']

    oneType(numbers, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    [10, Infinity]
*/

function oneType(dataType, arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === dataType) {
      result.push(arr[i])
    }
  }
  return result
}

console.log(oneType('string', ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]))
console.log(oneType('object', ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]))
console.log(oneType('number', ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]))