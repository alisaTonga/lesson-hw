const tick =setInterval(() => {
    console.log("tick");
}, 5000); // every 5 sec
const interval = setInterval(() => {
    console.log("interval");
}, 1000);

setTimeout(() => {
    clearInterval(tick)
    clearInterval(interval)
}, 50000);