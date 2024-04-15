// function declaration
function sum(a,b) {
    return a+b
}
// incoming
let result = sum(50,30)
console.log(result);
function print() {
    console.log("hello");
}
let res2 = print()
console.log(res2);

// function expression
const divide = function (a,b) {
    return a/b;
}
console.log(divide(20,5));
print2();
function print2() {
    console.log("Print-2");
}