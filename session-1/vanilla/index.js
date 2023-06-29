let state = 0;

const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")
const count = document.getElementById("count")

count.innerText = state;

increment.addEventListener("click", ()=>{
    count.innerText = state++
})

decrement.addEventListener("click", ()=>{
    count.innerText = state--
})