// 1. Write a function that multiplies 3 input numbers together.
function multiply3(num1,num2,num3){
    return num1 * num2 * num3
}
console.log(multiply3(2,4,6))


// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
function countUp(input){
    for(i = 0; i <= input; i++){
        if(i % 2 === 1){
            console.log(i)
        }
    }
}
countUp(10)


// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
const celebs = ['Jennifer Lopez', 'Johnny Depp', 'Tom Cruise', 'Adam Sandler', 'Betty White']
// function initials(names){
//     const initialsArr = []
//     for(let i = 0; i < names.Length; i++){
//         let initialStr = ''
//         for(let j = 0; j< names[i].length; j++){
//             if(names[i][j] === names[i][j].tuUpperCase() && names[i][j] !== " "){
//                 initialStr += names[i][j]
//             }
//         }
//         initialsArr.push(initialStr)
//     }
//     return initialsArr
// }
// console.log(initials(celebs))

function getInitials(names){
    const initialsArr = []
    for(let fullName of names){
        const nameArr = fullName.split(' ')
        const initials = nameArr[0][0] + nameArr[1][0]
        initialsArr.push(initials)
    }
    return initialsArr
}
console.log(getInitials(celebs))

// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
// let num = [8.5, 5.3]
// function round(roundedSum){
//     roundedSum = num[0] + num[1]
//     return Math.round(roundedSum)
// }
// console.log(round(num))

function calc(num1,num2,operation){
    
}

// 5. Write a function which takes in two arrays and returns those arrays combined together.
function arrayCombine(array1,array2){
    return array1.concat(array2)
}
console.log(arrayCombine([1,2,3], ['a','b','c']))