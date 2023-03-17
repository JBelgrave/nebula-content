// // // 1.   Declare a for loop that starts at 0, goes until 20, and increments by 1
// // //      Each loop it should log to the console the current index
//   for(let sort = 0; sort < 20; sort++){
//           console.log(sort)
//       }

// // // 2.   Declare a for loop that starts at 1, goes until 40, and increments by 2
// // //      Each loop it should log to the console the current index
 
//  for(let sort2 = 1; sort2 <= 40; sort2 += 2){
//          console.log(sort2);
//      }

// // // 3.   Create an array with all student names in it. 
// // //      Loop over the array and log each student's name to the console.
// // //      Inside the array declare an unrequired, but useful variable for 'currentStudent'
//  const names = ['Abdel', "Asadur", 'Aulexis', 'Dayana', 'Donald', 'Judah', 'Juliet', 'Matt']
//  for(let nameSort = 0; nameSort < names.length; nameSort++){
//       console.log(`${names[nameSort]}`);
//       }

// // // 4.   Use the array below for the following question
// // //      Loop over the numArray & ONLY log even numbers to the console.
//  2 Hints: there will be an IF statement within the loop & be sure to check the value, not the index
// const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];
// for(let arr = 0; arr < numArray.length; arr++){
//     if(numArray[arr] % 2 === 0){
//         console.log(numArray[arr])
//     }
// }

// // 5.   Use the above numArray array for this question
// //      Create a for loop which will iterate over each element of the above numArray and output a new array of only odd numbers
// const oddNums = []
// for(let i = 0; i < numArray.length; i++){
//     if(numArray[i] % 2 ===1){
//         oddNums.push(numArray[i])
//     }
//     console.log(oddNums)
// }


// 6.   Using the nums and the two empty placeholder arrays below
//      Create a for loop which will fill the two separate arrays, one with only positive numbers, one with only negative numbers

        const nums = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
        const positiveArr = [];
        const negativeArr = [];

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] <0){
//         positiveArr.push(nums[i])
//     }
//     else{
//         negativeArr.push(nums[i])
//     }
// }

for(let i = 0; i < nums.length; i++){
    nums[i] < 0 ? negativeArr.push(nums[i]) : positiveArr.push(nums[i])
}
console.log(positiveArr)
console.log(negativeArr)