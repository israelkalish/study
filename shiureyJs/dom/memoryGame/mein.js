const NewPlaceForTheCard = ()=> {
    let i =Math.floor(Math.random()*cardsArray.length)
    if (!cardsOfDisPlay[i]){return i} else {return NewPlaceForTheCard()}
}
const choosingANewCard = ()=> {
    let i =Math.floor(Math.random()*cardsArray.length)
    if (cardsOfDisPlay.includes(cardsArray[i])){return choosingANewCard()} else{return cardsArray[i]}
}

const cardsArray = [    
    '&#128525','&#128525',
    '&#128561','&#128561',
    '&#128564','&#128564',
    '&#128520','&#128520',
    '&#128545','&#128545',
    '&#129313','&#129313'
]
const inner = document.querySelectorAll(".inner")

let amountOfTickets = inner.length
const cardsOfDisPlay = []
for (let index = 0; index < amountOfTickets/2; index++) {
    let newPlace =choosingANewCard()
    cardsOfDisPlay[NewPlaceForTheCard()]= newPlace;
    cardsOfDisPlay[NewPlaceForTheCard()]= newPlace;
}

let lastCard =[0];
let lastClick =0 
for (let index = 0; index < amountOfTickets; index++) {
    inner[index].addEventListener("click", function(){
        let d = new Date();
        let t = d.getTime();
        if(t - lastClick < 1300){return}
        inner[index].innerHTML=`\n<p class="front">${cardsOfDisPlay[index]};</p>\n<p class="back back1"></p>\n`
        // lastCard[0] ++
        lastCard.push(inner[index])
        if(lastCard[1]===lastCard[2]){lastCard.pop()}
        if(lastCard[2]){
            if(lastCard[1].innerText===lastCard[2].innerText){
                lastCard[0] = 0
                lastCard.pop();lastCard.pop();
                return
            }
            lastClick = t;
            setTimeout(function(){
            lastCard[1].innerHTML=`\n<p class="front">&#10068;</p>\n<p class="back back1"></p>\n`
            lastCard[2].innerHTML=`\n<p class="front">&#10068;</p>\n<p class="back back1"></p>\n`
            lastCard[0] = 0
            lastCard.pop();lastCard.pop();
            }, 1300)
        }
    })
}
