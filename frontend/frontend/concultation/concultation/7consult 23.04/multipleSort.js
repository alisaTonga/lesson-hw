//Инициализация: Мы имеем массив объектов people, каждый из которых содержит информацию
// о человеке (имя, возраст, зарплата).

// Несортированный массив объектов
const people = [
    { name: "John", age: 30, salary: 50000 },
    { name: "Alice", age: 25, salary: 60000 },
    { name: "Bob", age: 35, salary: 40000 }
];

//  Используем метод sort() для сортировки с множественным сравнением

people.sort(function(a,b){
// Сравниваем по имени (в алфавитном порядке)
if (a.name < b.name) return -1
if (a.name > b.name) return 1
// метод sort() ожидает от функции сравнения, передаваемой в него,
// определённые значения.
// Возвращая -1, 0 или 1, мы указываем на отношение между двумя
// сравниваемыми элементами.

    // Если возвращается отрицательное число (-1), это означает,
    // что первый элемент должен быть расположен перед вторым в
    // отсортированном массиве. и наоборот

     
    // Если имена равны, сравниваем по возрасту
if (a.age< b.age) return -1
if (a.age>b.age) return 1
return a.salary- b.salary
})
// Вывод отсортированного массива
console.log(people)

// "Alice" < "Bob", поэтому объект с именем "Alice" будет первым.
// Если имена равны, сравнение по возрасту:
// Если имена равны и возрасты равны, сравнение по зарплате:
// У "Alice" зарплата 60000, у "Bob" - 40000. Поэтому "Alice" будет перед "Bob".