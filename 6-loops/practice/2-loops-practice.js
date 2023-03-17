// Reminder: control-c will kill an infinitely running node-process

// 1.   Write a while loop that loops over a string until it finds the letter "a"
//  const alpha = "this is an example";

//  let i = 0;
//  while(i < alpha.length){
//     if(alpha[i] === 'a'){
//         console.log(alpha[i])
//         break;
//     }
//     i++
//  }

 


// 2.   Write a while loop that logs to the console the 'count' until the 'count' reaches 100
//      Inside the while loop be sure to increase count by some number
let count = 0
  while(count < 100){
    count += 5
    console.log(`Current Count: ${count}`)
  }