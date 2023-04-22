console.log("exercise3")

const showPotos = async () => {
    try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        const data = await response.json()
        console.log(data)
        console.log(data[0].url)

        data.forEach(potos => {
            const poto = document.createElement("img")
            poto.src = potos.url
            poto.alt="אין לי מושג למה לא הצלחתי לטעון את התמונה"
            // poto.style.height  = "20%";
            poto.style.width  = "20%";
            document.body.append(poto)
        });
    } catch(err){
        console.log(err)
    }
}
// showPotos()

const showPoto = async () => {
    try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=3')
        const data = await response.json()
        console.log(data)
        // console.log(data[0].url)

        // data.forEach(potos => {
        //     const poto = document.createElement("img")
        //     poto.src = potos.url
        //     poto.alt="אין לי מושג למה לא הצלחתי לטעון את התמונה"
        //     // poto.style.height  = "20%";
        //     poto.style.width  = "20%";
        //     document.body.append(poto)
        // });
    } catch(err){
        console.log(err)
    }
}
showPoto()




