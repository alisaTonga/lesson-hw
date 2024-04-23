// function to get data 
function fetchData(){
    fetch ("https://jsonplaceholder.typicode.com/users")// tetch Api
    .then(resp=>{
        if(resp.status!==200){
            throw new Error("ERROR")
        }
        return resp.json();
    })
    .then(json=>{
        const result = document.getElementById("content")
        result.innerHTML = ""
        const userList = document.createElement("ul");
        json.forEach(user=>{
            const listItem = document.createElement("li");
            listItem.textContent=user.name;
            userList.appendChild(listItem) // appendchild add new el and looking for inside info
        })
        result.appendChild(userList)
    })
    .catch(error=>{
        console.error(error);
    })
}
document.getElementById("updateButton").addEventListener("click",fetchData)