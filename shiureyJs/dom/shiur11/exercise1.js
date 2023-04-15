console.log("gh")

const div = document.createElement("div")
const input = document.createElement("input")
const show = document.createElement("button")
show.innerText = 'show'

show.addEventListener("click", function(){
    alert(input['value'])
})

div.append(input)
div.append(show)
document.body.append(div)