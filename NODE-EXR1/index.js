import fs from 'fs'
console.log('hi')

const findIndex = (byId)=>todos.findIndex((obj)=>obj.id===parseInt(byId))

const push = (arr)=>{
    const newTodo ={}
    newTodo.id=Date.now()
    newTodo.title=arr[0]
    newTodo.descrtiption=arr[1]
    newTodo.isCompleted= false
    todos.push(newTodo)
}

const del = (delId)=>{
    const delTodo =findIndex(delId[0])
    if(delTodo===-1) {return}
    const spliceTodo =todos.splice(0,delTodo)
    todos.shift()
    todos.unshift(...spliceTodo)
}

const complete = (compId)=>{
    const compTodo =findIndex(compId[0])
    if(compTodo===-1) {return}
    todos[compTodo].isCompleted= !todos[compTodo].isCompleted
}

const editing = (edit)=>{
    const editTodo =findIndex(edit[0])
    if(editTodo===-1) {return}
    todos[editTodo].title=edit[1]
    todos[editTodo].descrtiption=edit[2]
}

const todos = JSON.parse(fs.readFileSync("./todos.json", 'utf8'))
const newInformation = process.argv
newInformation.splice(0,2)
const akshn =newInformation.shift()
akshn==='push'
?push(newInformation)
:akshn==='del'
?del(newInformation)
:akshn==='complete'
?complete(newInformation)
:editing(newInformation)


console.log(todos)
fs.writeFile("todos.json", JSON.stringify(todos), err => { 
 
	if (err) throw err; 
 
	console.log("Finished task");
});