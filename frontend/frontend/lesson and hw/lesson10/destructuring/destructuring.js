const person ={
    name1: "Frank",
    age:21,
}
console.log(person);
const age = person.age
console.log(age);
const name1 = person.name1
console.log(name1, age);

const dog = {
    nick: "Bobby",
    breed: "Corgi"
}

const {nick,breed, height =10, color =" black"} = dog
console.log(nick);
console.log(breed);
console.log(height);
console.log(color);