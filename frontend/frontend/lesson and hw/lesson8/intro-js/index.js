console.log("Hello js");

let dog = "Sharik";
dog = "Tizik";
dog =12 // we changed data type
const cat = "Barsik";
let str1 =  "Can be written in double quotes";
let str2 = 'Can be written in single quotes';
let str3 = "13";
str4 = str1 + " " + str2;
console.log(str4);
console.log(str1.toUpperCase()); //convert to upper case

// Number 2 

let num1 = 9;
let num2 = 9.6;

// 3 bigInt
let num3 = 1239n;

/// 4 Bolean
let isDrunk = true;
// conditionals
if (isDrunk){
    console.log("You're drunk")
}
const result = isDrunk ? "You're drunk": "You aren't drunk"

// 5 undefined
let str5;
console.log(str5);
 //6 null
// null - no value
// creatin null
let empty = null;
console.log(empty
)
// 7 symbol
let s1= Symbol("vku")

//converting types
//1 to string
// implicit conversion
let str7 = '' + 9;
console.log(typeof str7)
// plicit conversion
const num4 = 10;
let str8 = String(num4) // 10
console.log(str8)
// example
const res = 9 + 12 + "5" // 215
const res2 = "5" + 9 + 12 //5912
// if 1 num is string then all of them is string
//if first number is number than we can + and then its a string
// to number
// implicit conversion
const num5 = + "6";
const sum = + "9" + +"10"; // 9+10
console.log(sum)
// plicit conversion
constnum6 = Number("117") //117
const num7 = Number("129*#") //
console.log(num7)
// nan - not a number but number type
const res4 = Boolean(9) // true
const res5 = Boolean(0) // false
const test5 = Boolean(-1) // true numbers true 0- is alwayes false

// string to boolean
const res6 = Boolean(""); //false
const rest7 = Boolean(" ") // with something is true
console.log(rest7)
const res8 = Boolean(null) // false
const res9 = Boolean(undefined) // false
// strict and non-strict equality
// === strict equality we look at type and value
// == non-strict equality we look only at value
// = equal
console.log(9 == "9") //false
console.log(9 == "9") //true "9" == "9"