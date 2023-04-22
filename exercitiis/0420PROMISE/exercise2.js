console.log("exercise2")

const showUser = async () => {
    try{
        const response = await fetch('https://reqres.in/api/users')
        const data = await response.json()
        console.log(data)
        console.log(data.data[0])
        data.data.forEach(newUser)
    } catch(err){
        console.log(err)
    }
}

function newUser(element){
    const ul = document.createElement("ul")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    const img = document.createElement("img")
                
    h3.innerText = element.first_name+` `+element.last_name
    p.innerText = element.email
    img.src = element.avatar
    img.alt="אין לי מושג למה לא הצלחתי לטעון את התמונה"
    img.style.height  = "65px";
    img.style.width  = "65px";
    
    ul.append(h3,p,img)
    ul.style.margin = "0px 0px 50px 0px";
    body.append(ul)

}

const body = document.querySelector("body")
showUser()
