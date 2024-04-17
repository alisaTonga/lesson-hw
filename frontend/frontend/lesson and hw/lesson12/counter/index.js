const plusBtnEl = document.getElementById("plus")
const minusBtnEl = document.getElementById("minus")
const counterBtnEl = document.getElementById("counter")
const plus10El = document.getElementById("plus10")
const minus10El = document.getElementById("minus10")

let counter = 0;
const plusHandler = ()=>{
    counter++;
    counterBtnEl.innerText= counter
}
const minusHandler = ()=>{
    counterBtnEl.innerText = --counter;
}
plusBtnEl.addEventListener("click", plusHandler)
minusBtnEl.addEventListener("click", minusHandler)
const plus10Handler = ()=>{
    counter +=10;
    counterBtnEl.innerText = counter;
}
const minus10Handler = ()=>{
    counter -= 10;
    counterBtnEl.innerText = counter;
}
plus10.addEventListener("click", plus10Handler)
minus10.addEventListener("click", minus10Handler)