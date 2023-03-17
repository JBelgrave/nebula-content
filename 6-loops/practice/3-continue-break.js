// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'
const letters = "g q e y r u a o";
let i = 0;

while(i < letters.length){
    if(letters[i] === "a"){
      console.log(letters[i]);
      break;
    } else {
      i++
    }
  }

// for (i=0; i < letters.length; i++){
//     if (letters[i] === 'a') {
//         console.log(letters[i])
//         break;
//     }
// }


// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'
const num = [4,6,8,19,7,8,3,13,0,10,9];
let a = 0;

 while(a < num.length){
     if(num[a] === 3){
       console.log(`At index ${a} there is the number ${num[a]}`);
       break;
     } else {
       a++
     }
   }



// 3.   Using the continue keyword loop over an array of numbers & strings
//      If the current element is a number skip it
//      Otherwise add the element to an array
//      After finishing the loop log the new array to the console
const numStr = [34, 67, 'cat', 'dog', 56, 12, 'mouse'];
const b = []

for(let b = 0; b < numStr.length; b++){
    if(typeof(numStr[b]) === 'number'){
        continue;
    }
    numStr.push(numStr[b])
}
console.log(numStr)


/*for(let b = 0; i < words.length; i++){
    if(typeof(words[b]) === 'string'){
        words.push(words[i])
    }
}
*/