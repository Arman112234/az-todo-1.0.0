#! /usr/bin/env node
let fruitchart = ["Apple", "Bananea", "Orange", "Mango"];
console.log(fruitchart);
//to add a new fruit in list we use push() method
fruitchart.push('Melon');
console.log(fruitchart);
//pop() to reduce the last element from the list
fruitchart.pop();
console.log(fruitchart);
//contcat method to create a new array
fruitchart = fruitchart.concat(['Peech', "KIWI"]);
console.log(fruitchart);
let i = 0;
while (i <= 30) {
    console.log(i);
    i++;
}
export {};
