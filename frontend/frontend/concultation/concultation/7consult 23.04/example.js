const numbers =[33,1,7,3,56]
numbers.sort((a,b)=> b-a)
console.log(numbers);

const names = [ "Anna" ,"Ivan" ,"Anton", "anna", "Pavel", "pavel"]
names.sort((a,b)=> a.localeCompare(b))
console.log(names);
names.sort((a,b)=> b.localeCompare(a))
console.log(names);

const nums = [5,32,334,25,58,85,0,-9,-7776]
const nums_map = nums.map(el=>el).sort((a,b)=>a-b)
console.log(nums_map);

// reduce counter
let acc = 0
for(let i = 0; i<nums.length; i++){
    acc+=nums[i]
}
const sum = nums.reduce((acc,el)=> acc +el,0)
// spread turns array into elements
console.log(nums);
console.log(...nums);