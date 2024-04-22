// 1. Отправить запрос по ссылке https://dummyjson.com/users
// и получить массив с данными о пользователях
// 2. Из полученных данных отрисовать карточки пользователей
// (аватар, имя + фамилия, возраст)
// 3. Стилизовать карточки + сделать из контейнера грид
// 4. Отсортировать по возрасту
// 5. Отсортировать по фамилии (в алфавитном порядке)
const container = document.querySelector('.container')
fetch('https://dummyjson.com/users')
    .then(res=>res.json())
    .then(json=> render(json.users))

    const render= array=>{
    array
      .slice()
      .sort(((a,b)=>a.age-b.age))
      .sort((a,b)=>a.lastName.localeCompare(b.lastName))
    //Этот код сортирует массив объектов по значению их свойства lastName
    // с использованием метода sort() и функции сравнения.
    // Функция сравнения localeCompare() сравнивает строки в соответствии с
    // правилами языка, что позволяет правильно сортировать строки на разных языках.
    // В данном случае, массив объектов сортируется в алфавитном порядке по свойству lastName.
        .forEach(({firstName,lastName,age,image})=>{
            const cardEl = document.createElement("div")
            const nameEl = document.createElement("p")
            const ageEl = document.createElement("p")
            const avatarEl = document.createElement("img")
            avatarEl.src = image
            avatarEl.alt = `${firstName} ${lastName}`
            nameEl.innerText = `${firstName} ${lastName}`
            ageEl.innerText = `${age} years old`
            cardEl.append(avatarEl, nameEl, ageEl)
            container.append(cardEl)
        })
    }
    //1
    [...array].sort((a,b)=>a.age-b.age)
    //2
    array.map(el=>el).sort((a,b)=>a.age-b.age)
    //3
    array.slice().sort((a,b)=>a.age-b.age)