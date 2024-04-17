const todolistElement = document.getElementById("todo-list");
const allTodos = document.getElementById("list");
const btnClearAll = document.getElementById("clearAll");
const btnDeliteOneElement = document.getElementById("deliteOneElement");

const chores = [];
const clearAll = function () {
    while (allTodos.hasChildNodes()) {
        allTodos.firstChild.remove();
    }
}
const deliteOneEl = function () {
    if (allTodos.hasChildNodes()){
        allTodos.firstChild.remove()
    }
}
function clearInputs(event) {
    event.target.chores.value = "";
}
function newStatus(event) {
    if(event.target.style.textDecoration === "line-through"){
        event.target.style.textDecoration ="none"
    }else{
        event.target.style.textDecoration = "line-through"
    }
}
btnClearAll.addEventListener("click",clearAll);
btnDeliteOneElement.addEventListener("click", deliteOneEl);
todolistElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    const chore ={
        chore: event.target.chores.value
    }
    chores.push(chore)
    const liElement = document.createElement("li");
    liElement.textContent = `${chore.chore}`;
    liElement.onclick = newStatus;

    allTodos.append(liElement)
    clearInputs(event)
})