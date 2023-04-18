const score = document.getElementById('score')

class Enemy {
    constructor(weapon, motive, height, width, x, y, health) {
        this.weapon = weapon
        this.motive = motive
        this.height = height
        this.width = width
        this.x = x
        this.y = y
        this.health = health
    }

    appendEnemy() {
        const em = document.createElement('div');
        em.style.backgroundImage = "url('https://i.gifer.com/origin/7c/7c145ab9ffe62056d4eab27d7f940600_w200.gif')"
        em.style.backgroundSize = "cover"
        em.style.height = this.height
        em.style.width = this.width
        em.style.left = this.x
        em.style.top = this.y
        em.style.position = 'absolute'
        em.addEventListener('click', (event) => this.removeEnemy(event))
        document.body.appendChild(em)
    }

    removeEnemy(event) {
        score.innerText++
        event.target.style.backgroundImage = "url('https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif')"
        setTimeout(() => {
            document.body.removeChild(event.target)
        }, 1250)
        
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const createEnemy = () => {
    //let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let randomSize = randomNumber(25, 200)
    let randomX = randomNumber(0, 1000)
    let randomY = randomNumber(0, 700)
    const newEnemy = new Enemy('sword', 'angry', `${randomSize}px`, `${randomSize}px`, `${randomX}px`, `${randomY}px`, 100)
    newEnemy.appendEnemy()
}
setInterval(createEnemy, 2000)