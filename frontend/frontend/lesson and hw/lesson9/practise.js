// Создайте класс Alcohol с полями:
// - title
// - strength - крепость
// - volume - объекм бутылки
//  с методом info - выводт в консоль фразу
//  "Ни дня без <название алкоголя>" | "Надо и меру знать"
// Создайте производный класс Brendy
// - age - выдержка
// - country - страна производства
// Создайте производный класс Liquor
// - sugarAmount - количество сахара
class Alcohol{
    constructor(title, strength,volume){
        this.title = title;
        this.strength = strength;
        this.volume = volume;
        }
    info(){
        console.log(`Ни дня без ${this.title} | Надо и меру знать`)
    }
}

class Brendy extends Alcohol{
    constructor(title, strength, volume, age, country){
        super(title, strength,volume)
        this.age = age;
        this.country = country;
    }
}

class Liquor extends Brendy{
    constructor(title, strength, volume, age, country, sugarAmount){
        super(title, strength, volume, age, country)
        this.sugarAmount = sugarAmount;
    }
}

const wisky = new Alcohol("JackDaniels", 40, 250)
wisky.info()
const barrel = new Brendy("Barrel", 40,250,5, "Russia")
barrel.info()
const happyEnd = new Liquor("Happy End", 15,700,1,"Deutchland" , 15)
happyEnd.info()