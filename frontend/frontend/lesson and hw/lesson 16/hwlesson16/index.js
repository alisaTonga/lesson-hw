const jokesEl = document.getElementById("joke")
async function getJoke() {
    const res = await fetch("https://api.chucknorris.io/jokes/random")
    const joke = await res.json()
    const {value} = joke
    const jokeEl = document.createElement("h1")
    jokeEl.textContent = value
    jokesEl.append(jokeEl)
}
async function removeJoke(){
    jokesEl = "";
}
getJoke()
const button = document.getElementById("btn")
button.addEventListener("click",getJoke)