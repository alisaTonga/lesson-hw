const names = ["Semen","Ivan","Peter","Tatiana"];
const ages = [12,27,74,34];

const namesAges = [];
for (let i= 0; i < names.length; i++){
namesAges[i]=`${names[i]} is ${ages[i]} years old`
}

const name1 = "Semen";
const age = 33;
const text =`My name is ${name1} and I'm ${age} years old. I'm stydyind JS language.`
//console.log(text);
const reversed = [];
for (let i =0; i< namesAges.length; i++){
    reversed.unshift(namesAges[i]);

}
    console.log(reversed);
    console.log(namesAges);