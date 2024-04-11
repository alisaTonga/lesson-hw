// methods finding elements by id
// and adding it to variable
const btnElement = document.getElementById("btn1");
const btnElementText = "text which i enter into console"
console.log(btnElementText, "between variables", btnElement);
let pElementsByTag // Firstly, name variable

// method findinf´g elements by tag
pElementsByTag = document.getElementsByTagName("p") // adding value
console.log("pElementsByTag", pElementsByTag);

// method finding elements by class 
const pElementsByClass = document.getElementsByClassName("paragraph")
console.log("pElementsByClass", pElementsByClass);

// naming counter using let
let counter = 0;
btnElement.addEventListener("click", ()=> {
    // creating new element
    const newHeadding = document.createElement("h1")
    // counter +1 andrewrite variable
    counter+=1;
    // adding text ussing `` -back ticks
    newHeadding.innerText= `our first element cteated in JS number ${counter} `
    newHeadding.id = 'newHeading'
    newHeadding.className = 'newHeading'
    newHeadding.style.color = "red";
    newHeadding.style.fontSize = "30px"
    console.log(newHeadding);
    // adding to page
    document.body.appendChild(newHeadding)
})

const btn2 = document.getElementById("btn2")
const helloDom = document.getElementById("hello")
btn2.addEventListener("click", ()=>{
    helloDom.innerText= "This's not DOM 2"
    helloDom.className= "mainHeading"
})

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", ()=>{
    // deliting chosen in variable element
    helloDom.remove()
    
})
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", ()=>{
    //deliting chosen in variable element
    const cloneButton = btnElement.cloneNode(true)
    console.log(cloneButton);
    document.body.appendChild(cloneButton)
    // adding id
    cloneButton.id = "cloneButton"
    // changing text
    cloneButton.innerText = "Press me and you'll get green heading"
    cloneButton.addEventListener("click", ()=>{
        // creating new element
        const newHeadding = document.createElement("h1")
        newHeading.id = 'newHeading'
        newHeading.className = 'newHeading'
        newHeading.style.color = 'green'
        newHeading.style.fontSize = '30px'
    
        console.log(newHeading);
    
        //добавление на страницу в body
        document.body.appendChild(newHeading)
    })
})

const btn6 = document.getElementById('btn6')
const hiddenButton = document.getElementById('btn5')

btn6.addEventListener('click', () => {
    hiddenButton.setAttribute('class', 'visible')
})