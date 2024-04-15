//spread - allows to copy massive
const fruits = ["apple", "orange", "mango"];
const fruits2 = fruits;
fruits[0] = "peach"
console.log(fruits);
console.log(fruits2);

let str1 = "hello";
let str2 = str1;
str1 = "Goodbye"
console.log(str1);
console.log(str2);

const car = ["BMW", "Mercedes", "Audi"];
// spread
const carsCopy = [...car];
carsCopy[0] = "Opel";
console.log(car);
console.log(carsCopy);

const cities1 =["Berlin", "Paris"]
const cities2 = ["London", "Budapest"]
const joinedCities = [...cities1, ...cities2]
console.log(joinedCities);

const vegetables =["cucumber","tomato"]
const newVegetables = [...vegetables, "carrot"]
console.log(newVegetables);
// add
const first = ["1", "2"]
const second =["3","4","5"]
const comboFirstAndSecond = [...first, ...second]
console.log(first);
console.log(second);
console.log(comboFirstAndSecond);
//copy
const animals =["cat", "dog", "cow"]
const animalsCopy = [...animals, "horse"]
console.log();
console.log(animals);
console.log(animalsCopy);

