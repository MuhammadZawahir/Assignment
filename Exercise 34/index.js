"use strict";
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let favoritePizzas = ['Pepperoni', 'Cheese', 'Supreme'];
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
for (let pizza of favoritePizzas) {
    console.log(`My favorite pizza is ${pizza} pizza.`);
}
console.log("\nI love pizzas!\t");
