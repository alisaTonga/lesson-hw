const brothers =[
{race:"hobbit", height:110, age: 45, name:"Frodo Baggins"},
{race:"human", height:185 ,age:46 , name:"Aragorn"},
{race:"elf", height:189 ,age:110 , name:"Legolas"},
{race:"dworf", height:140 ,age:150 , name:"Gimly"},
{race:"human", height:195 ,age:200 , name:"Gandolf"},
]
//1. method map return new array
const names = brothers.map((Element)=>Element.name);
console.log(names);

// 2
const ages = brothers.map((brother)=>brother.age);
console.log(ages);

//3 
const raceNames = brothers.map((brother)=>brother.race + " " + brother.name);
console.log(raceNames);

//Пример 4
 // высокий - выше или равно 170
 // маленький - ниже 170
 // массив из слов [маленький, высокий,высокий, маленький,высокий]

 const sizes = brothers.map((brother)=>{
    if(brother.height >=170){
        return "высокий"
    }
    return "маленький"
 })
 console.log(sizes);
 const sizesVersion2 = brothers.map((brother)=>brother.height >= 170 ? "высокий": "маленький")
 console.log(sizesVersion2);
 //foreach -change the original array age +=1
 brothers.forEach((brother)=> brother.age +=1)
console.log(brothers);
// Names to upper case 
brothers.forEach((brother)=> brother.name.toUpperCase());
console.log(brothers);
// 3 Метод reduce 
 // с помощью цикла  for
 let sum = 0;
 for (let i = 0; i<ages.length; i++){
    sum+= ages[i];
 }
 console.log(sum) // 551
 // [ 45, 46, 110, 150, 200 ]

 // с помощью reduce

 const sum2 = ages.reduce((acc, current)=>acc+current,0);
  // iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200

// Аккумулятор (accumulator) - значение,
  // которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора
 // после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора.
 // Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора
 // при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет
 // начальным значением аккумулятора.

 // map + reduce
 const totalHeight = brothers.reduce((acc, brother)=> acc + brother.height,0)
 console.log(totalHeight);

 const totalHeight2 = brothers
.map((brother)=>brother.height) //height array
.reduce((acc, height)=>acc + height, 0)
console.log(totalHeight2);

const nameStr = brothers
.map((brother)=> brother.name)
.reduce((acc, name)=> acc + name + " ", "");
console.log(nameStr.trim());
//split
const str = 'Frodo Baggins, Aragorn, Legolas, Gimly, Gandolf'
const namesArr = str.split(", ")
console.log(namesArr);
const newStr = namesArr.join(" # ")
console.log(newStr);
const person = brothers.find((brother)=> brother.race === "human")
console.log(person);
// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)
// Выбрать тех кто старше 100 лет

const personAll = brothers.filter((brother)=> brother.race === "human")
console.log(personAll);
const oldBrothers = brothers.filter((brother)=> brother.age>100)
console.log(oldBrothers);
const oldNonHuman = brothers.filter((brother)=> brother.age>100 && brother.race !=="human")
console.log(oldNonHuman);