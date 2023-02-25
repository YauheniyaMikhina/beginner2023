// Task 2: Given an array of car manufacturers, convert the array to a string and back to an array

let cars = ['Volvo', 'Audi', 'Mercedes'];
let carsToString=cars.toString();
console.log(carsToString);
// 'Volvo,Audi,Mercedes'
let cars1 = 'Volvo,Audi,Mercedes';
let cars1Array = cars1.split(',');
console.log(cars1Array);
// [ 'Volvo', 'Audi', 'Mercedes' ]


