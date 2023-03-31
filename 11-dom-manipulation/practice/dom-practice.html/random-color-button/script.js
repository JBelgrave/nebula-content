let button = document.querySelector('.clicker button');
let body = document.querySelector('body')
// let clicked = true


// document.addEventListener("click", (e) => {
//     if (e.target === button && clicked === true) {
//         body.style.backgroundColor = "#168AAD";
//         clicked = false
//     } else if (e.target === button && clicked === false) {
//         body.style.backgroundColor = "#184E77";
//         clicked = true
//     }
// })


document.addEventListener("click", (e) => {
    let clicked = Math.ceil(Math.random()*5);
    switch (clicked) {
        case e.target === button && clicked === 1:
            body.style.backgroundColor = "#99D98C";
            break;
        case e.target === button && clicked === 2:
            body.style.backgroundColor = "#52B69A";
            break;
        case e.target === button && clicked === 3:
            body.style.backgroundColor = "#168AAD";
            break;
        case e.target === button && clicked === 4:
            body.style.backgroundColor = "#1E6091";
            break;
        case e.target === button && clicked === 5:
            body.style.backgroundColor = "#184E77";
            break;
    }
})