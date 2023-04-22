console.log("exercise6")

const showUser = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        console.log(data)
        console.log(data[0])

        data.forEach(todos => {
            const todo = document.createElement("li")
            todo.innerText = todos.title
            if (todos.completed){
                todo.style.textDecoration = "line-through";
            }
            document.body.append(todo)
        });
    } catch(err){
        console.log(err)
    }
}
showUser()