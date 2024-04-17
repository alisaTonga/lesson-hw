const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
const newCars = cars.map((car)=>{
    return{brand:car.brand, isDiesel: car.isDiesel}
})
console.log(newCars);
//2
const diselCars = cars.map((car) => car.isDiesel)
console.log(diselCars);
//3
const nonDiselCars = cars.filter((car)=> !car.isDiesel)
console.log(nonDiselCars);
// 4
const sum = cars
.filter(car=> !car.isDiesel)
.map((car)=> car.price)
.reduce((acc, price)=> acc + price,0)
console.log(sum);
//5 
cars.forEach(car=> car.price *=1.2)
console.log(cars);
//6
const cars2 = cars.map((car)=>{
    if(car.isDiesel){
        return { brand: "Tesla", price: 25000, isDiesel: false }
    }
})
console.log(car2);
//6.2
const car3 = cars.map((car)=>{
    car.isDiesel? { brand: "Tesla", price: 25000, isDiesel: false }:car
})