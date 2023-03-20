// 1. Write a function that takes in 1 number and returns that number + 1
function plusOne(num){
    return num + 1
}
console.log(plusOne(25))

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function goodnight(name){
    return `Goodnight ${name}`
}
console.log(goodnight("Judah"))

// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
function findZero(numArray){
    for(i = 0; i < numArray.length; i++){
        if(numArray[i] === 0){
            return "This array has the number zero in it"
        }else{
            return "This array does not hve the number zero in it"
        }
    }
}
console.log(findZero([4,5,8,6,9,0,12,5,2]))

// 4. Write a function that console logs 'hello world' 10 times to the console. 
// function helloWorld(){
//     for(j = 1; j <= 10; j++){
//         console.log(j, "Hello World")
//     }
// }
// helloWorld()


// 5. Write the prior function utilizing a 'fat arrow' function
const helloWorld = () => {
    for(j = 1; j <= 10; j++){
        console.log(j, "Hello World")
    }
}
helloWorld()