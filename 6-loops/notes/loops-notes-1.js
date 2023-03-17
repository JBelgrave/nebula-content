// const customers = ["John Doe", "Sally Sal", "Mally Mal", "Theodore Cumberbatch", "Curtis Jackson", "Clark Kent", "Peter Parker", "Pegasus Walters"];

// console.log(`Greetings ${customers[0]}`);
// console.log(`Greetings ${customers[1]}`);
// console.log(`Greetings ${customers[2]}`);
// console.log(`Greetings ${customers[3]}`);
// console.log(`Greetings ${customers[4]}`);
// console.log(`Greetings ${customers[5]}`);

// Looping from front to back
// for(let i = 0; i < customers.length; i++){
// console.log(`Greetings ${customers[i]}`);
// }

// Looping from back to front
// for(let i = customers.length - 1; i >= 0; i--){
//     console.log(`Greetings ${customers[i]}`)
// }
// This will output for every customer in our customers array (from above)


// const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// for(let sort = 0; sort < alpha.length; sort++){
//     console.log(`This is the letter ${alpha[sort]}`)
// }

// let i = 0
//    while(i <= 10){
//        console.log(i)
//        i++
//    }

// do{
//     console.log(i)
//     i++
// } while(i < 10){
//     console.log("hey")
// }

const arr = ['a','b','c','f','a','l','c']
let counter = 0
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        console.log(arr[i],arr[j])
    }
}