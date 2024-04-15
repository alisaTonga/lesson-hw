// Создать метод universalGreeting, этот метод будет приветствовать на рахных языках
// Пусть метод принимает в качестве параметров 
// -имя
// - функция приветствия

// Напишите две функции приветствия
// - одна пусть приветствует  на английском englishGreeting: "Hello, name " 
// вторая пусть будет на японском japaneseGreeting: "Konnichiwa, name " 

//Вызовите метод universalGreeting
function englishGreeting(name) {
    return console.log(`Hello, ${name}`);
}
function japaneseGreeting(name) {
    return console.log(`Konnichiwa, ${name}`);
}
function universalGreeting(name,greetings) {
    return greetings(name);
}
englishGreeting("Alisa")
japaneseGreeting("Elena")
universalGreeting("Bill", japaneseGreeting)