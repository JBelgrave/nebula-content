// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const car2000 = {
    brand: "Nissan",
    model: "370Z",
    year: 2020,
    color: "White",
    engine: "V6",
    topMph: 160,
    powerState: 'off',
}

// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(car2000.year, car2000.brand, car2000.model)


// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(car2000['color'], car2000['engine'], car2000['topMph'])


// 4.   Try and log a property that doesn't already exist - what output do we get?
//console.log(car2000.mpg)
//undefined


// 5.   Add a new key-value pair to the vehicle. 
car2000.available = true


// 6.   Using bracket-notation update a property on the vehicle. 
car2000['year'] = 2022


// 7.   Using dot-notation update a property on the vehicle. 
car2000.color = 'Blue'


// 8.   Create a method for turning your vehicle on
function startCar(){
    return car2000.powerState = 'on'
}
car2000.startCar = startCar


// 9.   Create a method for turning your vehicle off
function stopCar(){
    return car2000.powerState = 'off'
}
car2000.stopCar = stopCar

//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)

console.log(car2000.powerState)
car2000.startCar()
console.log(car2000.powerState)
car2000.stopCar()
console.log(car2000.powerState)