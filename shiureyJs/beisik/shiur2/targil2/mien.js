
// משימה שניה
// תרגול 1

const wot = prompt('מה להגיד לך 10 פעמים?')
for(let x=0; x<10;x++)
    {console.log(wot)
}

// תרגול 2

let meny = parseInt(prompt('כמה פעמים להגיד לך שלום?'))
for(; 0<meny ;meny--)
     {console.log('שלום')
}

// תרגול 3 

const  someTests = parseInt(prompt('כמה מבחנים עשית?'))
let GradeN = 0
for(let x=0; x<someTests ;x++)
    {let Grade = parseInt(prompt('מה הציון של המבחן ה'+(x+1)))
    GradeN = Grade+GradeN
}
console.log(GradeN/someTests)

// תרגול 4

let yourWordt = prompt('מה להגיד לך ?')

for (;yourWordt != 'stop';)
    {
        yourWordt = prompt(yourWordt+',מה עוד להגיד לך ?')
    }

// תרגול 5

let yourNomber = parseInt(prompt('תבחר מספר'))
let yourNomber2 =yourNomber
for (;yourNomber2 != 1;)
    {
        yourNomber2 = parseInt(prompt('תבחר עוד מספר'))
        if (yourNomber<=yourNomber2){
            yourNomber=yourNomber2
        }
        console.log(yourNomber+' '+yourNomber2)
    }
console.log(yourNomber)

// תרגול6.1

const wot2 = prompt('מה להגיד לך 10 פעמים?')
let x=0
while(x<10)
    {console.log(wot2)
    x++
}

// תרגול 6.2

let meny2 = parseInt(prompt('כמה פעמים להגיד לך שלום?'))
while(0<meny2)
     {console.log('שלום')
     meny2--
}

// תרגול 6.3

const  someTests2 = parseInt(prompt('כמה מבחנים עשית?'))
let GradeN2 = 0
let y=0
while (y<someTests2)
    {let Grade2 = parseInt(prompt('מה הציון של המבחן ה'+(y+1)))
    GradeN2 = Grade2+GradeN2
    y++
}
console.log(GradeN2/someTests2)

// תרגול 7.1

const wot3 = prompt('מה להגיד לך 10 פעמים?')
let z=12
do{console.log(wot3)
    z++}
while(z<10)

// תרגול 7.2

let meny3 = parseInt(prompt('כמה פעמים להגיד לך שלום?'))
do{console.log('שלום')
    meny3--}
while(0<meny3)

// תרגול 7.3

const  someTests3 = parseInt(prompt('כמה מבחנים עשית?'))
let GradeN3 = 0
let xz=1
do{let Grade3 = parseInt(prompt('מה הציון של המבחן ה'+(xz)))    
    GradeN3 = Grade3+GradeN3
    xz++
}while (x<someTests3)x
console.log(GradeN3/someTests3)

// תרגול 7.4

let yourWordt2 =""
do{yourWordt2 = prompt(yourWordt2+',מה להגיד לך ?')}
while (yourWordt2 != 'stop')

// תרגול 7.5

let yourNomber3 = 0
let yourNomber4 = 0
do{
        yourNomber4 = parseInt(prompt('תבחר עוד מספר'))
        if (yourNomber3<=yourNomber4){
            yourNomber3=yourNomber4
        }
        console.log(yourNomber3+' '+yourNomber4)
    }
while (yourNomber4 != 1)
console.log(yourNomber3)
