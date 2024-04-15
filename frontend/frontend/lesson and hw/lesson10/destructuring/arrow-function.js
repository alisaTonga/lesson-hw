//simple function
function sum(a, b) {
    return a+b
}
console.log(sum(20,10)); //30
//arrow function
const sum2 = (a,b)=>{
    return a+b
}
// one sting
const sum3 = (a,b)=>a+b;
console.log(sum3(4,99));//103

//function as a parament 
function calculate(a,b, operation){
    return operation(a,b)
}
function substract(a,b) {
    return a-b
}

subtract = calculate(9,3, substract)// 6
devidion = calculate(9,3, (a,b)=>a/b) //3
console.log(calculate(9,3, substract));
console.log(calculate(9,3, (a,b)=>a/b));

const years = prompt("How old are you")
alert("You are " + years + "old")

const isAdmin = confirm("Are you administrator")
alert isAdmin