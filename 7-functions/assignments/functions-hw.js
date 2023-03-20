  // 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
  // Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
function addOne(numArray){
    let newArr = []
    for(i = 0; i < numArray.length; i++){
        numArray[i]++
        newArr.push(numArray[i])
    }
    console.log(newArr)
}
addOne([4, 5, 6])

  // 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
  // Example string = "happy birthday", letter = "a", should return true
  // Example string = "happy birthday", letter = "q" should return false
function letterCheck(string, letter){
    if(string.includes(letter)){
        return true
    }else{
        return false
    }
}
console.log(letterCheck("people", "p"))
  
  // 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
  // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
function firstNames(names){
    let first = [];
    for(e = 0; e < names.length; e++){
        first.push(names[e].split(' ')[0]);
    }
    console.log(first)
}
firstNames(["Tom Smith", "Bob Jones", "Bill Williams"])

  // 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
  // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"
function greet(name, greeting){
    return `${greeting}, ${name}`
}
console.log(greet("Judah", "Hello"))
  
  // 5. Write a function that takes in the year someone was born and returns their age.
  // Example: birth year: 2000 returns 23
function ageFinder(birthYear){
    let currentYear = 2023
    return currentYear - birthYear
}
console.log(ageFinder(2002))