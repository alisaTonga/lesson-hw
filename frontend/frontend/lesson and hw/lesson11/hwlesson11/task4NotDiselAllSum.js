// Задание 4
//Посчитайте общую стоимость всех машин не с дизельным двигателем.
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
const carsIsNotDisl = cars.filter(car=> !car.isDiesel)
// const sum2 = ages.reduce((acc, current)=>acc+current,0);
const sum = carsIsNotDisl.reduce((acc, car)=> acc + car.price,0)
console.log(sum);