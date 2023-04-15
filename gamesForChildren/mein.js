console.log("df")

const div = document.createElement("div")
const dbuttons = ['blue','red','green','black','aqua'];
const buttons = {}
let color = 'transparent'
const tr = document.createElement("tr")
const td = document.createElement("td")


dbuttons.forEach(function(item){
    buttons[item] = document.createElement("button")
    buttons[item].innerText = item;
    buttons[item].style.background = item;
    buttons[item].style.fontSize="70px";
    if (item === 'black') {
        buttons[item].style.color ='white';
    }
    div.append(buttons[item])
    // debugger

    buttons[item].addEventListener("click", function(){
       document.body.style.background= item;
       color = item
    })
})

const table = document.createElement("table")
const tebl = 5
const pixel = {}
for (let index = 0; index < tebl; index++) {
    pixel[index]= document.createElement("tr")
    for (let i = 0; i < tebl; index++) {
        console.log(pixel[index])
        pixel[index+"-"+i]= document.createElement("td")
        pixel[index+"-"+i].style.width="1px";
        pixel[index+"-"+i].style.height= "1px";
        console.log(index+"-"+i)
        console.log(pixel[index+"-"+i])
        console.log(pixel[index])
        debugger
        pixel[index].append(pixel[index+"-"+i])
        console.log(pixel[index])

        pixel[index+"-"+i].addEventListener("click", function(){
            pixel[index+"-"+i].style.background= color;
        })
        console.log(pixel[index])
    }
    table.append(pixel[index])
}

document.body.style.height= "800px";
document.body.append(div,table) 
