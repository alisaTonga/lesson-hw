function getStudent(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = {
                name: "Andri",
                age:32,
            };
            resolve(student);
        }, 4000);
    })
}
const student1 = getStudent()
.then((student)=>{
    console.log(`Name: ${student.name}`);
})
.catch((error)=>{
    console.error("Error", error);
})