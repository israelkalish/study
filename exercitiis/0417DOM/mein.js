console.log(`go`)

const div = document.querySelector("div")
const input = document.querySelector("input")

const IndexUrbium = (urbs) =>{
    div.append(urbs)
}

const cities = [
    "Jerusalem",
    "Tel Aviv",
    "Haifa",
    "Ashdod",
    "Rishon LeZion",
    "Petah Tikva",
    "Netanya",
    "Beersheba",
    "Holon",
    "Bnei Brak",
    "Ramat Gan",
    "Bat Yam",
    "Ashkelon",
    "Rehovot",
    "Herzliya",
    "Kfar Saba",
    "Ra'anana",
    "Modi'in-Maccabim-Re'ut",
    "Hadera",
    "Lod",
    "Rosh HaAyin",
    "Nahariya",
    "Acre",
    "Bet Shemesh",
    "Tiberias",
    "Eilat",
    "Qiryat Ata",
    "Safed",
    "Yehud-Monosson",
    "Tamra"
];

const buttons = []
for (let index = 0; index < cities.length; index++) {
    const button = document.createElement("button")
    button.innerText = cities[index]
    buttons[index] =button
}
buttons.forEach(IndexUrbium)

input.addEventListener("input",()=>{
    div.innerHTML =``
    buttons.filter((myCiti)=>{
        return myCiti.innerText.toLowerCase().includes(input['value'].toLowerCase())
    }).forEach(IndexUrbium)
    if (div.innerHTML ===``) {
        const il = document.createElement("il")
        il.innerText = `There is no such city in the list`
        div.append(il)
        console.log(`go`)
    }
})

// inp1.addEventListener("change", function(event){
//     console.log(event)
// })

// inp2.addEventListener("input", function(event){
//     if(event.target.value.includes("#")){
//         event.preventDefault()
//     }
//     console.log(event)
// })

// inp3.addEventListener("blur", function(event){
//     console.log(event)
// })
