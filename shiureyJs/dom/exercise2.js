console.log("exercise2")

const p = document.createElement("p")

document.body.addEventListener("mousemove", function(event){
    p.innerText =event.layerX+" "+event.layerY;
})

document.body.style.height= "800px";
document.body.append(p)