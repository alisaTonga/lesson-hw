function getSeven(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(7)
        },4000)
    })
}
const promise = getSeven();
console.log(promise)

promise.then((data)=>{ // printing promise
    console.log(data);
})
function getSevenRej() {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            reject(new Error("Server Error"))
        }, 4000);
    })
}
const promise2 = getSevenRej()
promise2.then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log(e);
})
// функция принимать имя пользователя -
// если имя John - вернет resolved
// если имя другое - вернет rejected
function getAgeOfUserByName(name) {
    return new Promise(function(resolve, reject){
        if (name === "John"){
            setInterval(()=>{
                resolve(20)
            },3000)
        }
        else{
            setInterval(() => {
                reject(new Error("No such name"))
            }, 3000);
        }
    })
}
getAgeOfUserByName("John")
.then((data)=>console.log(data))
.catch((e)=>console.log(e))

getAgeOfUserByName("Tom")
.then((data)=>console.log(data))
.catch((e)=>console.log(e))

const greetings = setInterval(() => {
    console.log("Hello");
}, 1000);
const howAreU = setInterval(() => {
    console.log("How are you?");
}, 2000);
setTimeout(() => {
    clearInterval(greetings)
}, 1500);
setTimeout(() => {
        clearInterval(howAreU)
}, 2500);