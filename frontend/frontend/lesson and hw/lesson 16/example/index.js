const bookEl = document.getElementById("book")

async function loadBook() {
    const res = await fetch("https://alisherkhamidov.github.io/book-api/book.json");
    const book = await res.json();
    const{title,author,year,genre,cover} = book

    const cardEl = document.createElement("div");

    const titleEl = document.createElement("p")
    titleEl.className = "title"
    titleEl.innerText = `Title: ${title}`

    const authorEl = document.createElement("p")
    authorEl.innerText = `Àuthor: ${author}`

    const yearEl = document.createElement("p")
    yearEl.innerText = `Year: ${year}`

    const genreEl = document.createElement("p")
    genreEl.innerText = `Genre: ${genre}`

    const coverEl = document.createElement("img")
    coverEl.src = cover
    coverEl.alt = `Cover ${title} ${author}`
    cardEl.append(titleEl,authorEl,yearEl,genreEl,coverEl)
    bookEl.append(cardEl)
}
loadBook()