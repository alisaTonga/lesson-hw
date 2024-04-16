const fruits = ["apple", " orange", "banana"];
const newFruits = [...fruits, "mango"];
console.log(newFruits);

const fruit ={
    title: "apple",
    color:"red",
    weight:200
}
console.log(fruit);
const specialOrange = {...fruit, country: "Marocco"};
console.log(specialOrange);
const specialApple = {...fruit, color:"green"}
console.log(specialApple);