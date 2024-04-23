// 1. Дан массив с числами. Сформировать новый массив, в который попадут
// все числа из исходного массива, возведенные в 3 степень **3

//1 for
const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];
const numbersCube =[];
for(let i=0; i<numbers.length; i++){
    // or
    //numbersCube[i] = numbers[i]**3
    numbersCube.push(numbers[i]**3)
}
console.log(numbersCube);
//2 map
const numbers_pow0 = numbers.map((number)=> number**3)
console.log(numbers_pow0);
//3 for each
const numbers_pow1 = []
numbers.forEach(el=> numbers_pow1.push(el**3))
console.log(numbers_pow1);
// 2. Сформировать новый массив, в который попадут все последние цифры  %10
const lastNumber = numbers.map(number=> number%10)
console.log(lastNumber);

const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];
// 3. Сформировать новый массив, в который попадут все элементы из исходного массива.
// Если длина элемента меньше
// 6 (<), то добавить к этой строке 1
const shortString = strings.map(el=> el.length<6 ? el+1 : el)
console.log(shortString);
// actions with user 
alert("You're on the page?" ) 
let age = prompt("How old are you? ")
if (age>18){
    console.log("Hi");
}
else if (Number(age) === 18){
    console.log("OK");
}
else{
console.log("Bye");
}