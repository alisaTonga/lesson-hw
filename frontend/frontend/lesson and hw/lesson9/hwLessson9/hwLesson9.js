class Plant{
    constructor(title,height, age){
        this.title = title;
        this.height = height;
        this.age = age;
        }
    grow(){
        this.height += 10;
        console.log(` new height of ${this.title} is ${this.height}`);
    };
    info(){
        console.log(`${this.title} is ${this.age} years old and it's height is ${this.height}`);
    }
}
const cactus = new Plant("Cactus", 10, 3);
cactus.info();
cactus.grow();
class Rose extends Plant{
    constructor(title,height, age, numberOfFlowers){
        super(title,height, age)
        this.numberOfFlowers = numberOfFlowers;
    }
}
console.log();
const modernGardenRose = new Rose("Modern Garden Rose", 3, 6, 21)
modernGardenRose.info();
modernGardenRose.grow();