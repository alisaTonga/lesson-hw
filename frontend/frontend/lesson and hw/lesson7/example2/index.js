//creating elements by getting their id in indexedDB.html 
const paragraphElement = document.getElementById("text");
const changeButtonElement = document.getElementById("btn-change");
const flowerElement = document.getElementById("flowers");
const changeFlowerButttonElement = document.getElementById("btn-change-flower");
const surikatElement = document.getElementById("Surikat");
const addSurikatButtonElement = document.getElementById("add-surikat");
// we can settle event handler by cliking we will be changing backgroung color to blue
changeButtonElement.addEventListener("click", ()=>{
    paragraphElement.style.backgroundColor = "lightblue";
})
//changing text inside
changeFlowerButttonElement.addEventListener("click",()=>{
    flowerElement.textContent="Berries"
});
addSurikatButtonElement.addEventListener("click",()=>{
    surikatElement.src="https://yt3.ggpht.com/a/AGF-l78_OCoXkRxFMIABLatoe_Ln-jG0pHiDUnLE1A=s900-c-k-c0xffffffff-no-rj-mo"
});
surikatElement.style.width = "300px";