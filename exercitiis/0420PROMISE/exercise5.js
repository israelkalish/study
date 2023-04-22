console.log("exercise5")

const div = document.createElement("div")
const dbuttons = ['blue','red','green','black','aqua'];
const buttons = {}
let color = 'transparent'

dbuttons.forEach((item)=>{
    buttons[item] = document.createElement("button")
    buttons[item].innerText = item;
    buttons[item].style.background = item;
    buttons[item].style.fontSize="50px";
    if (item === 'black') {
        buttons[item].style.color ='white';
    }
    div.append(buttons[item])
    // debugger

    buttons[item].addEventListener("click", function(){
       document.body.style.background= item;
       color = item
    })
    buttons[item].addEventListener("mouseover", function(){
       document.body.style.background= item;
    })
    buttons[item].addEventListener("mouseout", function(){
       document.body.style.background= color;
    })
})

// function backgroundColor(color){
//     document.body.style.background= color;
// }

document.body.style.height= "800px";
document.body.append(div)   

