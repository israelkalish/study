console.log("exercise6")

const colors = ['blue','red','green','black','aqua'];
const ncolors = colors.length
let color = 0
setInterval(function () {
    color =(Math.floor(Math.random()*ncolors))
    document.body.style.background= colors[color];
}, 2000);

// setInterval(function () {
//     color =(Math.floor(Math.random()*1000000))
//     console.log(color)
//     document.body.style.background= '#'+color;
// }, 2001);