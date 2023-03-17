// Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. Test the function with some numbers.
function multiplyBy10(num){
    return num * 10
}
console.log(multiplyBy10(7))

// Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.
function sayGoodbye(name){
    return `Goodybye ${name}`
}
console.log(sayGoodbye("Judah"))



// Define a function called evenNumbers that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the modulus operator to check whether a number is even or not).
function evenNumbers(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        const currentNum = array[i]
        if(currentNum % 2 === 0){
            newArr.push(currentNum)
        }
    }
    return newArr
}
console.log(evenNumbers([1,2,3,4,5,6,7,8,9,10]))

// Define a function called reverseWords that takes in a string and returns a string with the order of words reversed.
 function reverseWords(str){
     return str.split("").reverse().join("")
 }
 console.log(reverseWords("This is a string"))