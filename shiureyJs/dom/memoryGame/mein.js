const NewPlaceForTheCard = ()=> {
    let i =Math.floor(Math.random()*amountOfTickets)
    if (!cardsOfDisPlay[i]){console.log(i);return i} else {return NewPlaceForTheCard()}
}
const choosingANewCard = ()=> {
    let i =Math.floor(Math.random()*cardsArray.length)
    if (cardsOfDisPlay.includes(cardsArray[i])){return choosingANewCard()} else{console.log(i); return cardsArray[i]}
}
// const choosingANewCard = ()=> {
//     let code =Math.floor(Math.random() * (128591 - 127744 + 1) + 127744);
//     if (cardsOfDisPlay.includes(`&#${code};`)||cardsNArray.includes(code)){return choosingANewCard()} else{
//         console.log(code)
//         return `&#${code};`}
// }

const andGame = ()=> {
    let code =Math.floor(Math.random() * (128541-128512 + 1) + 128512);
    if (code>15+128512&&code<23+128512&&code!=128527&&code!=128524&&code!=128517){return andGame()} else{
        console.log(code)
        return `&#${code};`}
}

const taim = 127811-127833
const cardsNArray = [127996,128493,128467,128463,128453,127998,127785,128407,128437,128389,128425,128364]
const cardsArray = [
    "&#127801;", "&#128154;", "&#127856;", "&#127937;", "&#127828;",
    "&#129346;", "&#127928;", "&#128660;", "&#127800;", "&#128247;",//9
    "&#128148;", "&#127943;", "&#127829;", "&#128511;", "&#128155;",
    "&#127882;", "&#127804;", "&#127867;", "&#127876;", "&#128640;",
    "&#128659;", "&#127963;", "&#128124;", "&#127873;", "&#128433;",//24
    "&#128512;", "&#127877;", "&#128187;", "&#127752;", "&#127912;",
    "&#127941;", "&#128683;", "&#128702;", "&#127814;", "&#129497;",
    "&#127946;", "&#128008;", "&#128142;", "&#128090;", "&#127808;",//39
    "&#127825;", "&#128663;", "&#127870;", "&#127774;", "&#127790;",
    "&#128678;", "&#128171;", "&#128188;", "&#128103;", "&#128170;",
    "&#128073;", "&#128039;", "&#128500;", "&#128241;", "&#128520;",//54
    "&#129425;", "&#127923;", "&#128075;", "&#128578;", "&#128270;",
    "&#129325;", "&#128112;", "&#128269;", "&#128521;", '&#128561;',
    "&#129385;", "&#128149;", "&#128070;", "&#128175;", '&#128564;',//69
    "&#129417;", "&#128102;", '&#128545;', '&#129313;', "&#127838;",
    "&#128293;", "&#129340;", "&#128060;", "&#128151;", "&#128081;",
    "&#128125;", "&#128174;", "&#128694;", "&#129409;", "&#128161;",//84
    "&#128294;", "&#128581;", "&#128169;", "&#128199;", "&#129489;",
    "&#129299;", "&#127936;", "&#128104;", "&#129322;", "&#128563;",
    "&#129326;", "&#128513;", "&#128176;", "&#128406;", "&#128079;",//99
    "&#128525;", "&#128131;", "&#129312;", "&#129347;", "&#128074;",
    "&#129488;", "&#128285;", "&#128166;", "&#128111;", "&#128495;",
    "&#129412;", "&#129323;", "&#128062;", "&#128540;", "&#128123;",
    "&#128080;", "&#128556;", "&#128584;", "&#128308;", "&#129498;" 
]


const inner = document.querySelectorAll(".inner")
const section = document.querySelector("section")

// inner.style.width= `850px`;

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
        console.log(lastCard[0])
        inner[index].innerHTML=`\n<p class="front">${cardsOfDisPlay[index]}</p>\n<p class="back back1"></p>\n`
        lastCard.push(inner[index])
        if(lastCard[1]===lastCard[2]){lastCard.pop()}
        if(lastCard[2]){
            if(lastCard[1].innerText===lastCard[2].innerText){
                lastCard[0].push(lastCard[1])
                lastCard[0].push(lastCard[2])
                lastCard.pop();lastCard.pop();
                if (lastCard[0][11]) {
                    setTimeout(function(){
                        section.innerHTML=""
                        section.innerHTML=andGame()
                        section.style.height  = "650px";
                        section.style.fontSize = '25em';
                    }, 800)
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
