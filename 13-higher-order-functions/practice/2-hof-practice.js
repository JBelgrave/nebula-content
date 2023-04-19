/* Question 1
Write a higher order function to manipulate numbers in an array
  Examples:
    changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
    changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
    changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]
*/
// function changeNums(operation, nums) {
//     const result = []
//   for (let i = 0; i < nums.length; i++) {
//     result.push(operation(nums[i]))
//   }
//   return result
// }

// function doubler(num) {
//     return num * 2
// }
// function halves(num) {
//     return num / 2
// }
// function pow(num) {
//     return num * num
// }

// console.log(changeNums(doubler, [1, 2, 3, 4, 5]))
// console.log(changeNums(halves, [1, 2, 3, 4, 5]))
// console.log(changeNums(pow, [1, 2, 3, 4, 5]))


/* Question 2
Write a higher order function that calculates some features of a string
    Example:
    stringInfo(length, 'Howdy Partner!') => 14
    stringInfo(vowels, 'Howdy Partner!') => 3
    stringInfo(capitals, 'Howdy Partner!') => 2
    stringInfo(nonLetters, 'Howdy Partner!') => 2
*/

function stringInfo(str, featureFunc) {
    return featureFunc(str)
}

function strLen(str) {
    return str.length
}
function vowels(str) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (vowelsArr.includes(str[i].toLowerCase())) {
            count++
        }
    }
    return count;
}
function capitals(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++
        }
    }
    return count
}
function nonLetters(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z')) {
            count++
        }
    }
    return count
}

console.log(stringInfo('Howdy Partner!', strLen))
console.log(stringInfo('Howdy Partner!', vowels))
console.log(stringInfo('Howdy Partner!', capitals))
console.log(stringInfo('Howdy Partner!', nonLetters))

/* Question 3
Write a higher order function that minimizes a given list of numbers into one number
    Example:
    minimizeNums(add, [2,3,5,8]) => 18
*/

function minimizeNums(minimizer, nums) {
    let result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        result = minimizer(result, nums[i])
    }
    return result
}

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

console.log(minimizeNums(add, [2, 3, 5, 8]))
console.log(minimizeNums(subtract, [10, 5, 2]))
console.log(minimizeNums(multiply, [1, 2, 3, 4]))
console.log(minimizeNums(divide, [100, 5, 2]))
