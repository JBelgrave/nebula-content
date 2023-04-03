const form = document.getElementById('id-card-form');
const idCard = document.getElementById('id-card');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const jobTitle = document.getElementById('job-title').value;
    const email = document.getElementById('email').value;

    const h2 = document.createElement('h2');
    h2.textContent = name;

    const p1 = document.createElement('p');
    p1.textContent = `Age: ${age}`;

    const p2 = document.createElement('p');
    p2.textContent = `Job Title: ${jobTitle}`;

    const p3 = document.createElement('p');
    p3.textContent = `Email: ${email}`;

    const info = document.createElement('div');
    info.appendChild(h2);
    info.appendChild(p1);
    info.appendChild(p2);
    info.appendChild(p3);

    idCard.textContent = '';
    idCard.appendChild(info);

    const images = ['1.png', '2.png', '3.png', '4.png', '5.png'];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const img = document.createElement('img');
    img.src = randomImage;
    idCard.appendChild(img);
});