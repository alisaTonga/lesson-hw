function getStudent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "Anri", age:32})
        }, 4000);
    })
}
let x;
getStudent().then((student)=>{
    console.log("Hello, ");
    console.log(student.name);
    x = student.name;
    console.log("inside callback", x); 
})
console.log("outside callback", x);