const button = document.getElementById("button");
const box = document.getElementsByClassName("box")[0] // use id

button.addEventListener("click", ()=>{
    box.classList.toggle("display")
})