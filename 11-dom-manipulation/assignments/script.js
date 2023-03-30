// Connect your JS file to your HTML file


// Select the <h1> element using querySelector() and log it to the console
const h1 = document.querySelector('h1');
console.log(h1.innerText);

// Select the <p> element using querySelector() and log it to the console
const p = document.querySelector('p');
console.log(p.innerText);

// Select the <ul> element using getElementById() and log it to the console
const ul = document.getElementById('list');
console.log(ul.innerText);

// Select the first <li> element using querySelector() and log it to the console
const li1 = document.querySelectorAll("li");
console.log(li1[0].innerText);

// Select the second <li> element using querySelectorAll() and array indexing, and log it to the console
const li2 = document.querySelectorAll("li");
console.log(li2[1].innerText);

// Select all <li> elements using getElementsByClassName() and log them to the console
//Incorrect but unsure what i'm missing, can only either get this or undefined
 const liAll = document.getElementsByClassName('item');
 console.log(liAll);

// Select the <ul> and create a new <li> and add it to the list
const item4 = document.createElement('li');
item4.innerHTML = 'Item 4';
document.getElementById('list').appendChild(item4);
console.log(ul.innerText);