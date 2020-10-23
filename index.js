const mixture = require('lodash')

const fs = require('fs')

const products = [
    { id: 1, name: "caramelo", price: 10},
    { id: 2, name: "azucar", price: 80},
    { id: 3, name: "alfajor", price: 100},
    { id: 4, name: "Gaseosa", price: 180},
    { id: 5, name: "yerba", price: 70},
    { id: 6, name: "helado", price: 170},
    { id: 7, name: "manzana", price: 30},
    { id: 8, name: "naranja", price: 35},
    { id: 9, name: "queso", price: 80},
    { id: 10, name: "tomate", price: 75},
    { id: 11, name: "lechuga", price: 80},
    { id: 12, name: "pescado", price: 160}
]


const higherPrices = products.filter( product => product.price > 150);
 

console.log(higherPrices);
console.log(mixture.shuffle(higherPrices));


fs.writeFile('./data/prod150.json', higherPrices.toString(), function(error){
   if (error) {
       console.log(`Error: ${error}`);
   } else {

    console.log(higherPrices);
   }
  });