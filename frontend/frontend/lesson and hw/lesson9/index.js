//example 1 creating object
const student = {
    age:22,
    name1:"Ivan"
}
console.log(student);
console.log(student.age);

//example2 key with space
const product = {
    title: "iphone",
    price: 2000,
    "model of phon3": "XR"
}
// get value by key
console.log(product.price);
console.log(product["model of phon3"]);
// add value by key
product.diagonal = 6.5
product["type of addaptor"] = "USB-C"
console.log(product);
// example 3 get k
let key = "age"
console.log(student[key]);
key = "name1"
console.log(student[key])
const client = {
    "first name" : "John",
    wife : "Maria"
}
const key1 = "wife"
console.log(client.key1);
console.log(client[key1]);
// example 4 we had variables and we want to create objects from that variables
const title = "Titanic"
const capacity = 1500
const titanic ={ title, capacity
}
console.log(titanic);
// example 5 
const name2 = "Avrora"
const cap = 300
const avrora ={
    title:name2, capacity:cap
}
console.log(avrora);
// example 6 method inside object
const dog={
    nick:"Tuskic",
    bark(){
        console.log("Woof woof");
    }
};
dog.bark();
//prototipe  inherance
// 1 object act like a prototip for another one
const bike ={
    brand: "Turist",
    drive(){
        console.log("bsh-br-br");
    }
};
const mountingBike ={
    __proto__:bike,
//    brand:"Stels",
    gears: 20,
    price : 600,
}
console.log(mountingBike);
console.log();
mountingBike.drive();
