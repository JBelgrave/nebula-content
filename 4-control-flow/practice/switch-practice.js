let horseName = "Johnny";
let position = Math.ceil(Math.random() * 5);
console.log(position);

switch (position) {
    case 1:
        console.log(`${horseName} finished in first place!`);
        break;
    case 2:
        console.log(`${horseName} finished in second place!`);
        break;
    case 3:
        console.log(`${horseName} finished in third place!`);
        break;
    default:
        console.log(`${horseName} did not finish in the top 3.`);
}