// Class 
class Animal{
    constructor(age,name,color){ // Class always starts with capital letter.
    this.age = age; // this is constructor element
    this.name = name;
    this.color = color; 
    }
    info(){
    console.log(`My name is ${this.name} Age: ${this.age} Color: ${this.color}`);   
    }
}    
const panda = new Animal(14,"Po", "white");
panda.info();
// inherance
// create any class bird
// and add ane more key heightsOfFlight and foodRation
class Bird extends Animal{ //extending animal
    constructor(age,name,color, heightOfFlight, foodRation){
        super(age,name,color) // copy from animal this part
        this.heightOfFlight = heightOfFlight;
        this.foodRation = foodRation;
    }
}
const colibri = new Bird(5,"Col", "red", 100, "Flowers")
console.log(colibri);
colibri.info();