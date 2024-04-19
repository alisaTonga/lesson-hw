const dogPhotoElement = document.getElementById("dog-image")
fetch("https://dog.ceo/api/breeds/image/random")
.then((response)=>response.json())
.then((obj)=>{
    const {message}= obj
    console.log(message);
    dogPhotoElement.src = message //save in img
})

