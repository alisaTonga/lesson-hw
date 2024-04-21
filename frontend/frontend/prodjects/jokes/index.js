const container = document.getElementById("container")
const btnNew = document.getElementById("btn")
function updataJoke(){

fetch("https://official-joke-api.appspot.com/random_joke")
.then(res=>res.json())
.then((obj)=>{
    const {setup, punchline} = obj
    container.textContent=`${setup}  ${punchline}`
})
} 
btnNew.onclick= ()=>{
    updataJoke()
}
