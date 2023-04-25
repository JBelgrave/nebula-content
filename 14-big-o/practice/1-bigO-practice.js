/* Either by hand, paint, or whatever you prefer draw the following complexities
  • O(1)
  • O(log n)
  • O(n)
  • O(n^2)
  • O(n^3)                                                                     */

// 1.   What is the big O of the following function? Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// The big O is "O(n)" Linear because it's looping through an array and logging each element of that array

// 2.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
// O(n)



// 3.   What is the big O of the following function Describe what the function does and use that as the reasoning for your answer.
function printLast(arr) {
    console.log(arr[arr.length - 1]);
}
// O(1) because the function is only logging a specific element and not looping through the array for it



// 4.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.
function everyOther(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i += 2) {
        newStr += str[i]
    }
    return newStr;
}
// O(n)


// 5.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
    return 2 * num
}
// O(1) because it is only multiplying a given number once and not looping through anything