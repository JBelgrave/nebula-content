// .sort() Practice

/* Question 1
Write a HOF to sort an array of numbers from largest to smallest */
const nums = [1, 25, 6, 3, 88, 45, 0]

function sortLargest(arr) {
    return arr.sort((a, b) => b - a)
}
console.log(sortLargest(nums))

/* Question 2
Write a HOF to sort peoples names by their length */
const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]
function sortLength(arr) {
    return arr.sort((a, b) => a.name.length - b.name.length)
}

console.log(sortLength(partyPeople))

/* Question 3
Write an HOF to sort an array of objects of people by their age youngest to oldest */
function sortAge(arr) {
    return arr.sort((a, b) => a.age - b.age)
}
console.log(sortAge(partyPeople))

/* Question 4
Write an HOF to sort an array of strings by the last letter of the string */
const strings = ['sam', 'john', 'daniel', 'vanessa']
function sortLastLetter(arr) {
    arr.sort((a, b) => {
        if (a[a.length - 1] > b[b.length - 1]) {
            return 1
        } else if (a[a.length - 1] < b[b.length - 1]) {
            return -1
        }
    })
    return arr
}
console.log(sortLastLetter(strings))