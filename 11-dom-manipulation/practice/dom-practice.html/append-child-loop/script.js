// Given this array
// We want to append a new list item to a list by looping over this array
// We want to do this only with JavaScript
// YOU SHOULD NOT TOUCH THE HTML FILE

// Steps
// Create a list and append it to the body
// Loop over todos and create a list item for each one and append it to the newly created list with the todo text.
const todos = ['Walk the dog', 'Make Dinner', 'Do Dishes', 'Mow Lawn', 'Make Bed']


for(let i = 0; i < todos.length; i++){
    let item = document.createElement('li')
    item.innerText = todos[i]
    document.querySelector('body').appendChild(item)
    console.log(item.innerText)
}

let body = document.querySelector('body')
body.style.backgroundColor = '#1d3557'
body.style.color = 'white'
body.style.fontSize = '30px'