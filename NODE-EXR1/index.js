import fs from 'fs'
console.log('hi')

const findIndexOfTodos = (byId)=>todos.findIndex((obj)=>obj.id===parseInt(byId))

const enterDataIntoTheServer = ()=>{fs.writeFile("todos.json", JSON.stringify(todos), err => { 
 
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
    enterDataIntoTheServer()
}

const deletingObjectFromArray = (delId)=>{
    const delTodo =findIndexOfTodos(delId[0])
    if(delTodo===-1) {return}
    todos.splice(delTodo,1)
    enterDataIntoTheServer()
}

const toggleComplete = (toggId)=>{
    const compTodo =findIndexOfTodos(toggId[0])
    if(compTodo===-1) {return}
    todos[compTodo].isCompleted= !todos[compTodo].isCompleted
    enterDataIntoTheServer()
}

const editingObjectInArray = (edit)=>{
    const editTodo =findIndexOfTodos(edit.shift())
    if(editTodo===-1) {return}
    for (let index = 0; index < edit.length; index++) {
        todos[editTodo][edit[index++]]=edit[index]
    }
    enterDataIntoTheServer()
}

const todos = JSON.parse(fs.readFileSync("./todos.json", 'utf8'))
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


// console.log(todos)