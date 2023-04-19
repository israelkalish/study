const NewPlaceForTheCard = ()=> {
    let i =Math.floor(Math.random()*amountOfTickets)
    if (!cardsOfDisPlay[i]){return i} else {return NewPlaceForTheCard()}
}
const choosingANewCard = ()=> {
    let i =Math.floor(Math.random()*cardsArray.length)
    if (cardsOfDisPlay.includes(cardsArray[i])){return choosingANewCard()} else{return cardsArray[i]}
}

const cardsArray = [
    "&#128525;", "&#128561;", "&#128564;", "&#128523;", "&#128545;", "&#129313;",
    "&#128063;", "&#128678;", "&#128171;", "&#129412;", "&#128188;", "&#128073;",
    "&#128039;", "&#128500;", "&#128241;", "&#128520;", "&#128176;", "&#129425;",
    "&#127923;", "&#128075;", "&#128578;", "&#128660;", "&#129325;", "&#128123;",
    "&#128112;", "&#128269;", "&#128728;", "&#128521;", "&#129385;", "&#128149;",
    "&#128070;", "&#128175;", "&#128715;", "&#128755;", "&#128065;", "&#129417;",
    "&#128102;", "&#128131;", "&#128293;", "&#129340;", "&#128060;", "&#128151;",
    "&#128081;", "&#128125;", "&#128174;", "&#128694;", "&#128076;", "&#128247;",
    "&#128161;", "&#128294;", "&#128581;", "&#128169;", "&#128199;", "&#129489;",
    "&#128154;", "&#128155;", "&#129409;", "&#129346;"      
]
const inner = document.querySelectorAll(".inner")

let amountOfTickets = inner.length
const cardsOfDisPlay = []
for (let index = 0; index < amountOfTickets/2; index++) {
    let newPlace =choosingANewCard()
    cardsOfDisPlay[NewPlaceForTheCard()]= newPlace;
    cardsOfDisPlay[NewPlaceForTheCard()]= newPlace;
}

let lastCard =[[]];
let lastClick =0 
for (let index = 0; index < amountOfTickets; index++) {
    inner[index].addEventListener("click", function(){
        let d = new Date();
        let t = d.getTime();
        if(t - lastClick < 1300||lastCard[0].includes(inner[index])){return}
        inner[index].innerHTML=`\n<p class="front">${cardsOfDisPlay[index]}</p>\n<p class="back back1"></p>\n`
        lastCard.push(inner[index])
        if(lastCard[1]===lastCard[2]){lastCard.pop()}
        if(lastCard[2]){
            if(lastCard[1].innerText===lastCard[2].innerText){
                lastCard[0].push(lastCard[1])
                lastCard[0].push(lastCard[2])
                lastCard.pop();lastCard.pop();
                return
            }
            lastClick = t;
            setTimeout(function(){
            lastCard[1].innerHTML=`\n<p class="front">&#10068;</p>\n<p class="back back1"></p>\n`
            lastCard[2].innerHTML=`\n<p class="front">&#10068;</p>\n<p class="back back1"></p>\n`
            lastCard.pop();lastCard.pop();
            }, 1300)
        }
    })
}
