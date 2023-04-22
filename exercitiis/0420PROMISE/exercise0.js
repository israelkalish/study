console.log("gh")

const showUser = async () => {
    try{
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data)
        console.log(data.results[0].name)
            h3.innerText = data.results[0].name.title
            p.innerText = data.results[0].name.first+` `+data.results[0].name.last
            cell.innerText = data.results[0].cell
            phone.innerText = data.results[0].phone
            ul.append(h3,p,cell,phone)
            div.append(ul)
    } catch(err){
        console.log(err)
    }
}


const ul = document.createElement("ul")
const h3 = document.createElement("h3")
const p = document.createElement("p")
const cell = document.createElement("li")
const phone = document.createElement("li")
const div = document.createElement("div")
const button = document.createElement("button")
button.innerText = 'Show user'

button.addEventListener("click", showUser)

div.append(button)
document.body.append(div)