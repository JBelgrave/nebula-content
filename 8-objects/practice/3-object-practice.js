// Create two objects each with 3 key value pairs and then check to see if at least one of the key value pairs match
// Write a function that accepts 2 objects and returns true or false
const dad = {
        a: "Jeff",
        b: 55,
        c: ["Banker", "Driver"],
        d: true
}
const mom = {
        name: "Mary",
        age: 45,
        occupation: "Banker",
        ismarried: true

}
const compare = (obj1, obj2) => {
    for(let i = 0; i < Object.keys(obj1).length; i++){
        for(let j = 0; j < Object.keys(obj1).length; j++){
            if(Object.keys(obj1)[i] === Object.keys(obj2)[j]){
                return true
            }
        }
    }
    return false
}
console.log(compare(dad, mom))

//Create a nested object and then iterate over it

const family = {
    dad: {
        name: "Jeff",
        age: 55,
        occupation: ["Banker", "Driver"],
        ismarried: true
    },
    mom: {
        name: "Mary",
        age: 45,
        occupation: "Banker",
        ismarried: true

    }
}