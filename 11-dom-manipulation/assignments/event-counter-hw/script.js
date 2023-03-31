// COUNTER EXERCISE

// Select the body element from index.html
const body = document.querySelector('body');

// Set an attribute of 'style' to the body tag and add a background color of anything other than white
body.style.backgroundColor = "#669BBC";

/* -------------------------------------------------------------------------- */

// Create an h1 element
const h1 = document.createElement("h1");

// Append a new h1 element to the body element as a child
document.body.appendChild(h1);

// Add text to the h1 element
h1.innerText = "default";

// Assign the background color of this element to something unique
h1.style.backgroundColor = "#003049";

// Set a new style attribute to the h1 element
h1.style.color = "white";
h1.style.borderRadius = "25px";

// Add font size to the h1Element
h1.style.fontSize = "75px";

// Set the default text to the number zero
h1.innerText = 0;

/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const addButton = document.createElement("button");

// Append the button element to the body element
document.body.appendChild(addButton);

// Add text to the button that says "Add One"
addButton.innerText = "Add One";

// Add a class attribute to button
addButton.classList.add("addButton");

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
const minusButton = document.createElement("button");

// Add the button element to the body element
document.body.appendChild(minusButton);

// Add text to the button element that says "Subtract One"
minusButton.innerText = "Subtract One";

// Add a class attribute of style to the button element
minusButton.classList.add("style");

/* -------------------------------------------------------------------------- */
// INCREMENT BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value

document.addEventListener("click", (event) => {
    if (event.target === addButton){
        h1.innerText++;
    } 
})

/* -------------------------------------------------------------------------- */
// DECREMENT BUTTON FUNCTION
// Create functionality that, when you click this button it decreases the h1 value
document.addEventListener("click", (event) => {
    if (event.target === minusButton){
        h1.innerText--;
    } 
})