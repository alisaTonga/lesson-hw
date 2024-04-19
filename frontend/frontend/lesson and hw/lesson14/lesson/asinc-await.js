//1 option working with promise
function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("John")
        }, 1000);
    })
}
console.log(getName());
// prosessing using then
getName().then((data)=>{
    console.log(data);
})
//2 option
async function f() {
    const response = await getName(); // using await we can open promise
    console.log(response);
}
// 2 identical function
function getFive(){
    return new Promise(function(resolve, reject){
        resolve(5)
    })
}
console.log(getFive());
//2
async function getFiveVersion1() {
    return 5 
}
console.log(getFiveVersion1());