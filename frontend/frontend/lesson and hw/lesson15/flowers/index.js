const flowersContainerEl = document.getElementById("flowers-container")
async function loadFlowers() {
    const res = await fetch("https://alisherkhamidov.github.io/book-api/flowers.json")
    const flowers = await res.json()
    flowers.forEach(flower => {
        const {name,color,description,image,maxHeight} = flower
        const cardEl = document.createElement("div")
        cardEl.className = "card"
        const nameElement = document.createElement("span")
        nameElement.classList.add("card-el", "title")
        nameElement.textContent = name
        const imgElement = document.createElement("img")
        imgElement.className = "card-el"
        imgElement.src = image
        cardEl.append(nameElement ,imgElement)
        flowersContainerEl.append(cardEl)
    });
}
loadFlowers()