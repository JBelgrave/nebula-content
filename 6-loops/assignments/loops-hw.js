// 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
//      Each loop it should log to the console 'the current index is _'
for(a = 0; a <= 30; a++){
    console.log(`The current index is ${a}`);
}


// 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
//       Each loop it should log to the console the current index
for(b = 1; b < 10; b += 2){
    console.log(`The current index is ${b}`);
}


// 3.   Create an array with your top 5 celebrity names in it. 
//      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
//      Loop over the array and log each celebrity's full name to the console.
let celeb = ['Jennifer Lopez', 'Johnny Depp', 'Tom Cruise', 'Adam Sandler', 'Betty White'];
for(c = 0; c < celeb.length; c++){
    console.log(celeb[c]);
}


// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
for(d = 0; d < celeb.length; d++){
    if((d - 1) % 2 === 0){
        console.log(celeb[d]);
    }
}


// 5.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
let celebFirstArray = [];
for(e = 0; e < celeb.length; e++){
    let celebFirst = celeb[e].split(' ');
    celebFirstArray.push(celebFirst[0]);
}
console.log(celebFirstArray);


// 6.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only last names
let celebLastArray = [];
for(f = 0; f < celeb.length; f++){
    let celebLast = celeb[f].split(' ');
    celebLastArray.push(celebLast[1]);
}
console.log(celebLastArray);


// 7.   Loop over the celebrityist and then loop through each name. 
//      If a letter is a vowel, log it to the console



// 8.   Loop over the celebrity list and then loop through each name. 
//      If a letter is uppercase, log it to the console



// 9.   Convert your celebrity array to all caps and no spaces:
//      Ex:
//        Input:  ['Martha Stewart', 'David Beckham', etc..] 
//        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
const celebUpper = celeb.toString().toUpperCase().split(" ").join("-").split(",")
console.log(celebUpper)

// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop


//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console