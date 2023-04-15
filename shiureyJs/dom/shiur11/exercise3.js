console.log("exercise3")

const div = document.createElement("div")
const input = document.createElement("input")
const img = document.createElement("img")
const button = document.createElement("button")
button.innerText = 'show'

button.addEventListener("click", function(){
    img.src = (input["value"])
    div.append(img)
})

div.append(input)
div.append(button)
document.body.append(div)