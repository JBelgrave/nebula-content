const myShoppingList = ["Apples", "Bread", "Cheese", "Grapes", "Sauerkraut", "Cucumber"];
const myFridge = ["Tartar Sauce", "Pickles", "Sauerkraut", "Milk", "Cheese"];
const iAlreadyHave = [];

for(let i = 0; i < myShoppingList.length; i++){
  for(let j = 0; j < myFridge.length; j++){
    if(myShoppingList[i] === myFridge[j]){
      iAlreadyHave.push(myShoppingList[i]);
    }
  }
}

console.log(iAlreadyHave);
// Output: ["Cheese", "Sauerkraut"]