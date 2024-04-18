console.log("apple"); // sync code. Has prioritet
setTimeout(()=>{
    console.log("banana1"); //async code
}, 5000)
console.log("banana");
function getSix () {
    setTimeout(()=>{
        return 6;
    }, 4000)
}
let x = getSix();
console.log(x); // undefined while x printed as soon as posible but function waited 4 seconds

function printClap() {
    console.log("Clap");
}
function printBravo() {
    console.log("Bravo");
}
function clapHands() {
    setTimeout(printClap,2000);
    setTimeout(printBravo,6000)
}
clapHands()