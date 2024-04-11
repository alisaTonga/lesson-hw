// array is dinamic
//the lenght is not fixed

const array1 = []; // 1 method
const array2 = new Array(); //2 method
// how to add value by index
const fruits = [];
fruits[0] = "Apple" // 0 is index 
console.log(fruits)
fruits[1] = "Banana"; 
console.log(fruits)
//how to get value by index
console.log(fruits[1]);
console.log(fruits.length)

// array with valies
const cars = ["BMW", "Mersedes", "Audi", "Toyota", "VW", "Tesla"];
console.log(cars)

// arrays methods
const students = [];
students.push("John") // adding John to right
console.log(students)
students.push("Tom")
console.log(students)
students.unshift("Alex") // adding alex to left
console.log(students)
// pop delite last arrays element
const vik = students.pop();
console.log(students);
// shift - delite el from the left part of array(start)
const leon =students.shift();
console.log(students);
console.log(leon);