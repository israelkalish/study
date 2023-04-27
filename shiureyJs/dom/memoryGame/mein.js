const NewPlaceForTheCard = ()=> {
    let i =Math.floor(Math.random()*amountOfTickets)
    if (!cardsOfDisPlay[i]){console.log(i);return i} else {return NewPlaceForTheCard()}
}
// const choosingANewCard = ()=> {
//     let i =Math.floor(Math.random()*cardsArray.length)
//     if (cardsOfDisPlay.includes(cardsArray[i])){return choosingANewCard()} else{console.log(i); return cardsArray[i]}
// }
const choosingANewCard = ()=> {
    let code =Math.floor(Math.random() * (128591 - 127744 + 1) + 127744);
    if (!cardsYArray.includes(code)) {
        if (cardsOfDisPlay.includes(`&#${code};`)||cardsNArray.includes(code)||(code<127789&&code>127776)||(code<127904&&code>127891)||
            (code<127968&&code>127955)||(code<127992&&code>127984)||(code<128000&&code>127994)||(code<128331&&code>128317)||
            (code<128507&&code>128359)||(code<128640&&code>128591)||(code<128720&&code>128709)||(code<128756&&code>128722)||
            (code<128992&&code>128762)||(code<129293&&code>129003)||(code<129402&&code>129398)||(code<129454&&code>129450)||
            (code<129648&&code>129535)||(code<129656&&code>129651)||(code<129664&&code>129658)||(code<129680&&code>129666))
            {return choosingANewCard()
        }
    }
    console.log(code)
    return `&#${code};`
}
const andGame = ()=> {
    let code =Math.floor(Math.random() * (128541-128512 + 1) + 128512);
    if (code>15+128512&&code<23+128512&&code!=128527&&code!=128524&&code!=128517){return andGame()} else{
        console.log(code)
        return `&#${code};`}
}
const layingCards = ()=>{
    while(cardsOfDisPlay.pop()){}
    // cardsOfDisPlay.forEach((o)=>{o=""})
    // cardsOfDisPlay = []
    for (let index = 0; index < amountOfTickets/2; index++) {
        let newPlace =choosingANewCard()
        cardsOfDisPlay[NewPlaceForTheCard()]= newPlace;
        cardsOfDisPlay[NewPlaceForTheCard()]= newPlace;
    }
}
const flippingACard = (card,i)=>{
    card.addEventListener("click", function(){
        let d = new Date();
        let t = d.getTime();
        if(t - lastClick < 1300||lastCard[0].includes(card)){return}
        console.log(lastCard[0])
        card.innerHTML=`\n<p class="front">${cardsOfDisPlay[i]}</p>\n<p class="back back1"></p>\n`
        lastCard.push(card)
        if(lastCard[1]===lastCard[2]){lastCard.pop()}
        if(lastCard[2]){
            if(lastCard[1].innerText===lastCard[2].innerText){
                lastCard[0].push(lastCard[1])
                lastCard[0].push(lastCard[2])
                lastCard.pop();lastCard.pop();
                if (lastCard[0][amountOfTickets-1]) {
                    console.log 
                    setTimeout(function(){
                        section.innerHTML=""
                        section.innerHTML=andGame()
                        section.style.fontSize = '25em';
                    }, amountOfTickets*66)
                }
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

const refreshment =(amountOfCards)=>{
    console.log(amountOfCards.srcElement.innerText)
    amountOfTickets = parseInt(amountOfCards.srcElement.innerText);
    section.innerHTML=""
    section.style=""
    section.style.width ="650px";
    console.log(section)
    console.log(amountOfTickets)
    layingCards()
    while(lastCard[0].pop()){}
    for (let i = 0; i < amountOfTickets; i++) {
        const div1 = document.createElement("div")
        const div2 = document.createElement("div")
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        
        div1.classList='card';
        div2.classList='inner';
        div2.value=i;
        p1.innerText="❔"
        p1.classList='front';
        p2.classList='back back1';
        div2.append(p1,p2)
        div1.append(div2)
        section.append(div1)
        flippingACard(div2,i)
        if (amountOfTickets>30) {
            div1.style.width="120px";
            div1.style.height="120px";
            section.style.width ="1050px";
        }
        if (amountOfTickets>40) {
            section.style.width ="1310px";
        }
        if (amountOfTickets>50) {
            section.style.width ="1450px";
            div1.style.paddingBottom ="1px";
        }
        if (amountOfTickets>75) {
            div1.style.width="100px";
            div1.style.height="100px";
            div1.style.paddingBottom ="1px";
        }
    }
    if(amountOfTickets===20) {
        console.log(amountOfTickets)
        section.style.width ="810px";
        console.log("ggg")
    }else if (amountOfTickets===24) {
        section.style.width ="970px";
    }else if (amountOfTickets===28) {
        section.style.width ="1130px";
    }
}

const cardsNArray = [127798,127869,127949,127950,128063,128065,128253,128254,128335,129339,129350,129394,129443,129444,129483,129484]
const cardsYArray = [127988,128372,128373,128378,128400,128405,128406,128420,128716,128725,128747,128748]
// const cardsArray = [
//     "&#127801;", "&#128154;", "&#127856;", "&#127937;", "&#127828;",
//     "&#129346;", "&#127928;", "&#128660;", "&#127800;", "&#128247;",//9
//     "&#128148;", "&#127943;", "&#127829;", "&#128511;", "&#128155;",
//     "&#127882;", "&#127804;", "&#127867;", "&#127876;", "&#128640;",
//     "&#128659;", "&#128124;", "&#128584;", "&#128308;", "&#127873;",//24
//     "&#128512;", "&#127877;", "&#128187;", "&#127752;", "&#127912;",
//     "&#127941;", "&#128683;", "&#128702;", "&#127814;", "&#129497;",
//     "&#127946;", "&#128008;", "&#128142;", "&#128090;", "&#127808;",//39
//     "&#127825;", "&#128663;", "&#127870;", "&#127774;", "&#127790;",
//     "&#128678;", "&#128171;", "&#128188;", "&#128103;", "&#128170;",
//     "&#128073;", "&#128039;", "&#128500;", "&#128241;", "&#128520;",//54
//     "&#129425;", "&#127923;", "&#128075;", "&#128578;", "&#128270;",
//     "&#129325;", "&#128112;", "&#128269;", "&#128521;", '&#128561;',
//     "&#129385;", "&#128149;", "&#128070;", "&#128175;", '&#128564;',//69
//     "&#129417;", "&#128102;", '&#128545;', '&#129313;', "&#127838;",
//     "&#128293;", "&#129340;", "&#128060;", "&#128151;", "&#128081;",
//     "&#128125;", "&#128174;", "&#128694;", "&#129409;", "&#128161;",//84
//     "&#128294;", "&#128581;", "&#128169;", "&#128199;", "&#129489;",
//     "&#129299;", "&#127936;", "&#128104;", "&#129322;", "&#128563;",
//     "&#129326;", "&#128513;", "&#128176;", "&#128406;", "&#128079;",//99
//     "&#128525;", "&#128131;", "&#129312;", "&#129347;", "&#128074;",
//     "&#129488;", "&#128285;", "&#128166;", "&#128111;", "&#128495;",
//     "&#129412;", "&#129323;", "&#128062;", "&#128540;", "&#128123;",
//     "&#128080;", "&#128556;", "&#129498;" 
// ]
const inner = document.querySelectorAll(".inner")
const section = document.querySelector("section")

let amountOfTickets = inner.length
const cardsOfDisPlay = []
layingCards()


let lastCard =[[]];
let lastClick =0 
inner.forEach(flippingACard);
// for (let index = 0; index < amountOfTickets; index++) {
//     flippingACard(inner[index],index)
// }
//(function(a,b){flippingACard(a,b)});

const link = document.createElement("link")
document.body.append(link)
link.href="extension.css" 
link.rel="stylesheet"


function myFunction() {
    inner.classList.toggle("show");
}

const header = document.querySelector("header")
const difficulty = document.createElement("div")
const buttonDifficultyMenu = document.createElement("button")
const difficultyMenu = document.createElement("ul")

buttonDifficultyMenu.innerText ="Difficulty"
buttonDifficultyMenu.classList='dropbtn'
difficulty.classList='dropdown'
difficultyMenu.classList='dropdown-content'

const difficultylevels =[12,16,20,24,28,32,40,50,60,72,84,98]
for (let index = 0; index < difficultylevels.length; index++) {
    const level = document.createElement("a")
    level.innerText = difficultylevels[index];
    difficultyMenu.append(level)

    level.addEventListener("click",refreshment)
}
difficulty.append(buttonDifficultyMenu,difficultyMenu)
header.append(difficulty)











// section.innerHTML=""
// const cardsOfDisPlay2 = [127798,127869,127949,127950,128063,128065,128253,128254,128335,129339,129350,129394,129443,129444,129483,129484]
// for (let index = 0; index < 129686 - 127744; ){
//     const div2 = document.createElement("div")
//     for (let i = 0; i < 10; i++,index++) {
//         let code = 127744 + index
//         if (!cardsYArray.includes(code)) {
//             if(
//                 cardsNArray.includes(code)||(code<127789&&code>127776)||(code<127904&&code>127891)||(code<127968&&code>127955)||
//                 (code<127992&&code>127984)||(code<128000&&code>127994)||(code<128331&&code>128317)||(code<128507&&code>128359)||
//                 (code<128640&&code>128591)||(code<128720&&code>128709)||(code<128756&&code>128722)||(code<128992&&code>128762)||
//                 (code<129293&&code>129003)||(code<129402&&code>129398)||(code<129454&&code>129450)||(code<129648&&code>129535)||
//                 (code<129656&&code>129651)||(code<129664&&code>129658)||(code<129680&&code>129666)
//             ){
//                 i--
//                 continue;
//             }
//         }
//         const button = document.createElement("button")
//         button.innerHTML=`&#${code};`
//         button.id=code
//         button.style.fontSize = '2em';
//         div2.append(button)
//         if(code===129685){
//             console.log(code)
//             index++
//             break
//         }
//     }
//     section.style.width  = "910px";
//     section.append(div2)
// }
