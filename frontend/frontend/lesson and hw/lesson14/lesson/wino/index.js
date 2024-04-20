// 1. Отправить запрос на https://sampleapis.com/api-list/wines
// и получить (вывести в консоль) массив с данными о белых винах
// 2. Отрисовать карточки вин с рейтингом 4.8 и более (image, wine, winery, rating)
// 3. Стилизовать карточки (border, padding, border-radius).
// Из контейнера сделать grid - 5 колонок + отступы
// 4. Если у вина рейтинг 4.9 и больше то покрасить карточку в светло-зеленый.
// А если 4.8 - то в светло-голубой
const container = document.querySelector(".container")
fetch("https://api.sampleapis.com/wines/reds")
.then(res=>res.json())
.then(json=>render(json))

const render = array=>{
    array
    .filter(el=>el.rating.average>=4.8)
    .forEach(({image, wine, winery, rating, location})=>{
        const cardElement = document.createElement("div")
        const titleElement = document.createElement("p")
        const wineryElement = document.createElement("p")
        const ratingElement = document.createElement("p")
        const locationElement = document.createElement("p")
        const imgElement = document.createElement("img")

        titleElement.innerText = `Title: ${wine}`;
        wineryElement.innerText = `Winery: ${winery}`;
        ratingElement.innerText = `Rating: ${rating.average}`;
        locationElement.innerText = `Location: ${location}`;
        imgElement.src = image;
        imgElement.alt = wine;


        cardElement.style.backgroundColor = rating.average>4.8 ? "lightgreen" : "lightblue"
        cardElement.append(imgElement, titleElement, wineryElement,locationElement, ratingElement)
        container.append(cardElement)
    })
}
