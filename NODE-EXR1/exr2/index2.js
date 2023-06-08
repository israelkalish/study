import fs from 'fs'
import express from 'express'
console.log('hi')

const app = express()
app.use(express.json());

const readFile = (path) => {
    return JSON.parse(fs.readFileSync(path, "utf8"));
};

app.get('/', (req, res) => {
    res.send(readFile('./products.json'))
});

app.get("/product/:id", (req,res) => {
    const fileArray = readFile("./products.json")
    const id = req.params.id
    const desiredProduct = fileArray.find((item) => item._id === +id)
    res.send(desiredProduct)
})

app.post("/", (req,res)=>{
    const obj = {...req.body}
    if(Object.keys(obj).length === 0 ){
        res.send("failed")
    }
    const answer = writeToFileSingleObject(obj,"./products.json")
    res.send(answer)
})

app.put("/product/:id", (req,res) => {
    const id = req.params.id
    const obj = {...req.body}
    const answer = updateFile(id, "./products.json", obj)
    res.send(answer)
})

app.delete("/product/:id/", (req,res) => {
    const id = req.params.id
    const answer = deleteFromFile(id, "./products.json")
    res.send(answer)
})

const writeFile = (path, arr) => {
    fs.writeFile(path, JSON.stringify(arr), writeFunc);
    console.log("Done writing"); // Success
};

const writeFunc = (err) => {
    // Checking for errors
    if (err) throw err;
};
  
const writeToFileSingleObject = (obj, path) => {
    const fileArray = readFile(path);
    fileArray.push(obj);
    writeFile(path,fileArray);
    console.log("Done writing"); // Success
    return fileArray
};

const deleteFromFile = (id, path) => {
    const fileArray = readFile(path);
    const itemToBeDeletedIndex = fileArray.findIndex((item) => item._id === +id)
    if(itemToBeDeletedIndex===-1){
        return
    }
    const clone = [...fileArray];
    const deleteFile =clone.splice(itemToBeDeletedIndex, 1);
    writeFile(path,clone);
    return deleteFile
};

const updateFile = (id, path, updatedObj) => {
    const fileArray = readFile(path);
    const itemToBeUpdated = fileArray.findIndex((item) => item._id === +id)
    const clone = [...fileArray]
    for (const key in updatedObj){
        if(clone[itemToBeUpdated][key]){
            clone[itemToBeUpdated][key] = updatedObj[key]
        }
    }
    writeFile(path,clone);
    return clone
}


app.listen(8001, () => {
    console.log('Example app listening on port 8001!')
});


// const path = './products.json'