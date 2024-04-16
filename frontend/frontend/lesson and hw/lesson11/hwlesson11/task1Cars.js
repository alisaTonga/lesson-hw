//Задание 1
//У вас есть массив объектов:
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
//Создайте на основе страрого массива новый массив объектов по образу: 
//[{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
const carBrandIsDisel = cars.map(car=> "brand: " + car.brand + ", " + "isDiesel: " + car.isDiesel)
//const carBrandIsDisel = cars.find(car=> car.brand && car.isDiesel)
//brothers.filter((brother)=> brother.age>100 && brother.race !=="human")
console.log(carBrandIsDisel);
console.log(cars);