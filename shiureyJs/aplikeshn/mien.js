console.log('mishn')

const div = document.querySelector(".dms")
const tasks = ['משפחת קאליש','חילי','דודי','שלומי']
const tasklines =[]
let done =0

function sort(){
    div.innerHTML =''
    for (let index = 0,design=0  ; index < tasklines.length; index++) {
        if (tasklines[index] &&(!done || tasklines[index]['lastChild']['firstChild']['innerText'] ==='perform')) {
            if(design){tasklines[index].classList.add('dm2')}
            else{tasklines[index].classList.remove('dm2')}
            div.append(tasklines[index]);
            design-= design*2-1
        }
    }
}

function newMission(item) {
    if (!item){return}
    const taskbar = {}
    taskbar['div'] = document.createElement("div")
    taskbar['div'].classList.add('dm')
    taskbar['p'] = document.createElement("p")
    taskbar['p'].innerText = item
    taskbar['ul'] = document.createElement('ul')
    taskbar['ul'].classList.add('udm')
    taskbar['buttonDone'] = document.createElement('button')
    taskbar['buttonDone'].innerText ='done'
    taskbar['buttonDone'].classList.add('bdm')
    taskbar['buttonDelete'] = document.createElement('button')
    taskbar['buttonDelete'].innerText ='delete'
    taskbar['buttonDelete'].classList.add('mdm')
    taskbar['ul'].append(taskbar['buttonDone'],taskbar['buttonDelete'])
    taskbar['div'].append(taskbar['p'],taskbar['ul'])
    tasklines.push(taskbar['div'])
    
    taskbar['buttonDone'].addEventListener("click", function(){
        taskbar['p'].classList.toggle('de')
        if (taskbar['buttonDone'].innerText ==='done') {
            taskbar['buttonDone'].innerText ='perform'
        }else{
            taskbar['buttonDone'].innerText ='done'
        }
        sort()
    })
    taskbar['buttonDelete'].addEventListener("click", function(){
        delete tasklines[tasks.indexOf(item)]
        delete tasks[tasks.indexOf(item)]
        sort()
    })
}

const Performed = document.querySelector(".Performed")
Performed.addEventListener("click",function(){
    done -= done*2-1 ,sort()
    if (done) {
        Performed.innerHTML ='<h1>All</h1>'
    }else{
        Performed.innerHTML ='<h1>Performed</h1>'
    }
})

const add = document.querySelector(".add")
const input = document.querySelector("input")
add.addEventListener("click",function(){
    console.log("input['value']=", input['value'])
    console.log("!tasks.includes(input['value']) & input['value']=",!tasks.includes(input['value']) & input['value'])
    console.log("!tasks.includes(input['value'])=",!tasks.includes(input['value']) )
    console.log("!tasks.includes(input['value']) && input['value']=",!tasks.includes(input['value']) && input['value'])
    console.log("")
    if(!tasks.includes(input['value']) && input['value']){
        done = 0
        Performed.innerHTML ='<h1>Performed</h1>'
        tasks.push(input['value'])
        newMission(input['value'])
        sort()
    }
})

const change = document.querySelector(".change")
change.addEventListener("click",function(){
    div.classList.toggle('dms2')
})

tasks.forEach(newMission)
sort()
