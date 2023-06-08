import fs from 'fs'
import express from 'express'
console.log('hi')

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const findIndexOfArr = (byId)=>todos.findIndex((obj)=>obj.id===parseInt(byId))

const enterDataIntoTheServer = (path)=>{fs.writeFile(path, JSON.stringify(todos), err => { 
 
	if (err) throw err; 
 
	console.log("Finished task");
})};

const addNewObject = (arr)=>{
    const newTodo ={}
    newTodo.id=Date.now()
    for (let index = 0; index < arr.length; index++) {
        newTodo[arr[index++]]=arr[index]
    }
    newTodo.isCompleted= false
    todos.push(newTodo)
    enterDataIntoTheServer(path)
}

const deletingObjectFromArray = (delId)=>{
    const delTodo =findIndexOfArr(delId[0])
    if(delTodo===-1) {return}
    todos.splice(delTodo,1)
    enterDataIntoTheServer(path)
}

const toggleComplete = (toggId)=>{
    const compTodo =findIndexOfArr(toggId[0])
    if(compTodo===-1) {return}
    todos[compTodo].isCompleted= !todos[compTodo].isCompleted
    enterDataIntoTheServer(path)
}

const editingObjectInArray = (edit)=>{
    const editTodo =findIndexOfArr(edit.shift())
    if(editTodo===-1) {return}
    for (let index = 0; index < edit.length; index++) {
        todos[editTodo][edit[index++]]=edit[index]
    }
    enterDataIntoTheServer(path)
}

const path =`todos.json`
const todos = JSON.parse(fs.readFileSync(`${path}`, 'utf8'))
const newInformation = [...process.argv]
console.log(newInformation)
newInformation.splice(0,2)

const akshn =newInformation.shift()
if(akshn==='push'){
    addNewObject(newInformation)
}else if(akshn==='del'){
    deletingObjectFromArray(newInformation)
}else if(akshn==='complete'){
    toggleComplete(newInformation)
}else if(akshn==='editing'){
    editingObjectInArray(newInformation)
}

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});

// console.log(todos)