// 1.   Write a function that tests if a string contains the string of '123' within it
function contains123(str) {
    const regex = /123/
    return regex.test(str)
}
console.log(contains123('758785-123-758678')) //true

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false

function containsAC(str) {
    const regex = /a.*c/ // .* means any characters in between the a and c don't matter, as long as a comes before c
    return regex.test(str)
}
console.log(containsAC('a113412341234c')) //true


// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'
function numberOf(string, test) {
    const regex = new RegExp(test, 'g')
    let counter = 0
    let splitStr = string.split('')
    splitStr.forEach(chara => regex.test(chara.toLowerCase()) ? counter++ : false)
    return counter
}
console.log(numberOf('thist its a teTst', 't'))


// 4.   Write a function that checks if all characters in a string are lowercase letters
function isAllLower(str) {
    const regex = /^[a-z]+$/
    return regex.test(str)
}
console.log(isAllLower('abde'))

// 5.   Write a function that checks if a string has an uppercase letter
function hasUpper(str) {
    const regex = /[A-Z]/
    return regex.test(str)
}
console.log(hasUpper("asdGi"))

// 6.   Write a function that checks if a string contains a dash or underscore
function dashUnderscore(str) {
    const regex = /[-_]/
    return regex.test(str)
}
console.log(dashUnderscore('test-case'))

// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
function comCheck(str) {
    const regex = /\.com$/
    return regex.test(str)
}
console.log(comCheck("example.com"))


// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning
function httpCheck(str) {
    const regex = new RegExp("^(http|https)://", "i")
    return regex.test(str)
}
console.log(httpCheck("https://example.com"))

// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not
function firstUpper(str) {
    const regex = /^[A-Z]/
    return regex.test(str);
}
console.log(firstUpper("Abcde"))