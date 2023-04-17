console.log('mishn')

const div = document.querySelector(".dms")
const tasks = ['משפחת קאליש','חילי','דודי','שלומי']
const tasklines =[]
let done =0

function sort(){
    div.innerHTML =''
    for (let index = 0,design=0  ; index < tasklines.length; index++) {
        if (tasklines[index] &&(!done || tasklines[index]['isCompleted'])) {
            if(design){tasklines[index].classList.add('dm2')}
            else{tasklines[index].classList.remove('dm2')}
            div.append(tasklines[index]);
            design-= design*2-1
        }
    }
}

function newMission(item) {
    if (!item){return}
    const div = document.createElement("div")
    const p = document.createElement("p")
    const ul = document.createElement('ul')
    const input = document.createElement('input')
    const buttonDelete = document.createElement('button')

    div.classList.add('dm')
    ul.classList.add('udm')
    input.classList.add('bdm')
    buttonDelete.classList.add('mdm')

    p.innerText = item
    input.type="checkbox"
    div.isCompleted= false
    buttonDelete.innerText ='delete'
    
    ul.append(input,buttonDelete)
    div.append(p,ul)
    tasklines.push(div)
    
    input.addEventListener("click", function(){
        p.classList.toggle('de')
        div.isCompleted =!(div.isCompleted)
    })
    buttonDelete.addEventListener("click", function(){
        delete tasklines[tasks.indexOf(item)]
        delete tasks[tasks.indexOf(item)]
        sort()
    })
}

const Performed = document.querySelector(".Performed")
Performed.addEventListener("click",(perfect))

function perfect(){
    done -= done*2-1 ,sort()
    done? Performed.innerHTML ='<h1>All</h1>' : Performed.innerHTML ='<h1>Performed</h1>'
}

const add = document.querySelector(".add")
const input = document.querySelector("input")
add.addEventListener("click",function(){
const theNewMission =input['value']
    if(!tasks.includes(theNewMission) && theNewMission){
        done = 1
        tasks.push(theNewMission)
        newMission(theNewMission)
        perfect()
    }
})

const change = document.querySelector(".change")
change.addEventListener("click",function(){
    div.classList.toggle('dms2')
})

tasks.forEach(newMission)
sort()
