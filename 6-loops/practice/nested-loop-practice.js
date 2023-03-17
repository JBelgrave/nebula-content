// 1.   Given an array of strings
//      Loop over the array of strings
//      And loop over each string.
//      If a word has the letter "a" in it, log it to the console => [Jordan]
// const names = ['Bill', 'Jordan', 'Pete', 'Daniel'];

// for(let i = 0; i < names.length; i++){
//         const name = names[i]
//     for (let j = 0; j < name.length; j++){
//         if(name[j] === 'a'){
//              console.log(name)
//         }
//     }
// }


// 2.   Given an array of strings
//      Loop over the array
//      And loop over each string.
//      Create a new array of strings where every other letter in each string is capitalized 
//      Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
// const stringArray = ['This','is','an','array','of','strings']
// const newArr = []

// for(let i = 0; i < stringArray.length; i++){
//     const word = stringArray[i]
//     const newStr = ''
//     for(let j = 0; j < word.length; j++){
//         const letter = word[j]
//         if(j % 2 === 0){
//             newStr += letter.toUpperCase()
//         }else{
//             newStr += letter
//         }
//     }
//     newArr.push(newStr)
// }
// console.log(newArr)



// 3.   Given an array of arrays of numbers (nested array)
//      Add all the inner values up and push them into a single array
//      Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]]
const sumsArray = []
for(let i = 0; i < arrayOfArrays.length; i++){
    const arr = arrayOfArrays[i]
    let sum = 0
    
    for(let j = 0; j < arr.length; j++){
        const num = arr[j]
        sum = sum + num
     }
     sumsArray.push(sum)
 }
 console.log(sumsArray)

 let a = []