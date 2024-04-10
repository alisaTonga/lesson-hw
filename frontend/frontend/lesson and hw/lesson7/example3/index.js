//we can create documents from scratch and add it to html file
// create empty p
const newElement = document.createElement("p");
newElement.textContent = "I was created by JS";

newElement.style.border = "4px solid red";

document.body.append(newElement);
// attaching element to document
const targetElement = document.getElementById("target-element");
const newBtn = document.createElement("button");
newBtn.type = "button";
newBtn.textContent = "Press me"
targetElement.append(newBtn);
