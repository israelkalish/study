console.log("exercise4")

const p = document.createElement("p")
const div = document.createElement("div")
const button = document.createElement("button")
const array =[1,2,3,4,5,6]

button.addEventListener("click", function(){
    array.pop()
    p.innerText = array
    console.log(array)
})

button.innerText = 'Remove'
p.innerText = array
console.log(array)
div.append(p)
div.append(button)
document.body.append(div)   