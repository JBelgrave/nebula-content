// 1.   Create an array that contains two of your favorite things to do
const favAct = ["Games", "Movies"];
console.log(favAct);

// 2.   Using an array method, add another thing you like to do to that list
favAct.push("Cooking");
console.log(favAct);

// 3.   Reverse the order of the array (remember, if needed use MDN)
favAct.reverse();
console.log(favAct);

//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(weekdays.length);

// 5.   log the 4th element in the array
console.log(weekdays[3]);

// 6.   Remove the first element in the array. Log the new array and the element removed from the array
const removedDay = weekdays.shift();
console.log(weekdays);
console.log(removedDay);

// 7.   Put 'Sunday' back at the beginning of the array and log the new array
weekdays.unshift(removedDay);
console.log(weekdays);

// 8.   Remove the last element in the array. Log the new array and log the element removed
weekdays.pop()
console.log(weekdays)

// 9.   Add 'Saturday' back to the end of the array and log the new array
weekdays.push('Saturday')
console.log(weekdays)

//10.   Replace 'Thursday' with 'Friday Junior'
weekdays[4] = 'Friday Junior'
console.log(weekdays)

//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const favDay = weekdays[5]
console.log(`My favorite day of the week is ${favDay}`)

//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
console.log(phone.concat(laptop))

//13.   Write a line of code to test if something is an array or not
console.log(Array.isArray(weekdays))
