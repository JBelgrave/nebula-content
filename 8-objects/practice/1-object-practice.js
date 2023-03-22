// Nested Object
// const family = {
//     dad: {
//         name: "Jeff",
//         age: 55, 
//         occupation: ["Banker", "Driver"],
//         ismarried: true
//     },
//     mom: {
//         name: "Mary",
//         age: 45,
//         occupation:"Banker",
//         ismarried: true
//     },
//     daughter: {
//         name: "Lily",
//         age: 12,
//         occupation: "Student",
//         ismarried: false
//     },
//     son: {
//         name: "Billy",
//         age: 12,
//         occupation: "Student",
//         ismarried: false
//     },
//     dog: {
//         color: 'Brown',
//         ears: 'Floppy',
//         tail: 'Short',
//         legs: 4,
//     }
// }

// const rob = {
//     name: "Robby",
//     age: 38,
//     occupation: "Robber",
//     ismarried: false
// }
// family.rob = rob
// delete family.daughter
// //console.log(family)

// const car = {
//     color: 'Green',
//     engine: 'V6',
//     exhaust: 'Dual Rear Exit',
//     topSpeed: '125 mph',
//     start: function(){
//         console.log("Vroom Vroom!");
//     }
// }
// car.start()

// function turnOffCar(){
//     console.log("Powering Down")
// }
// car.turnOffCar = turnOffCar;
// car.turnOffCar()

// const string = {
//     toUpperCase: function(str){
//         return str.toUpperCase()
//     }
// }

const car4 = {
    color: 'Green',
    engine: 'V6',
    exhaust: 'Dual Rear Exit',
    topSpeed: '125 mph',
    racingAccessories: {
        sharkfins: 10,
        wingSpoiler: { brand: 'Mophorn GT', material: 'Aluminum'},
        sideSkirt: { brand: 'Samurai', material: 'Carbon Fiber'}
    },
    start(){
        console.log("Vroom Vroom!");
    }
}
car4.start()
//console.log(car4.racingAccessories.wingSpoiler.material)


// const momCar = {
//     color: 'Orange',
//     brand: 'Honda',
//     topSpeed: 90
// }

// let newSpeed = 125

// function tryMutatePrimitive(prim, value){
//     prim = value;
//     return prim
// }
// const newSpeed1 = tryMutatePrimitive(newSpeed, 300)
// console.log(newSpeed)

// function tryMutateObject(obj, prop, value){
//     obj[prop] = value
//     return obj;
// }
// tryMutateObject(momCar, 'topSpeed', 300)
// //console.log(momCar.topSpeed)


// const person = {
//     name: "John",
//     age: 67,
//     hobby: "biking"
// }

// for(let key in person){
//     if(key === 'age'){
//         person[key]++
//     }
// }
// console.log(person)

//  const keyArray = Object.entries(person)
//  for(let i = 0; i < keyArray.length; i++){
//      console.log(keyArr[i])
// }