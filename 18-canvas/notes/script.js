const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';

let x = 25;
let y = 25;
ctx.fillstyle = 'green'
const handleKeyPress = (e)=> {
    if(e.key === 'ArrowUp'){
        y -= 5
    } else if(e.key === 'ArrowDown'){
        y += 5
    } else if(e.key === 'ArrowLeft'){
        x -= 5
    } else if(e.key === 'ArrowRight'){
        x += 5
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 50, 50);
    document.addEventListener('keydown', handleKeyPress)
    requestAnimationFrame(draw)
}

requestAnimationFrame(draw)