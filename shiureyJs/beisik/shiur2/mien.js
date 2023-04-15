//משימה ראשונה

// const temp = parseInt(prompt('what is the temp outside'))
// const day = parseInt(prompt('enter todays day(answer with a number)'))
// const hour = parseInt(prompt('what is the hour'))

// if (temp>23) {
//     console.log('תתלבש קיצי')}
// else if (temp<=23 && temp>=17)
//     {console.log('תתלבש ארוך')}
// else console.log('תלבש מעיל')

// if (day <=5){
//         console.log('יום נעים')
//     if(hour<=17 && hour>=8){
//         console.log('לך לעבוד')}
//     else if (hour<8) {
//         console.log('לך לישון')}
//     else {console.log('לך לחגוג')}
// }
// else{
// console.log('סופש נעים לך תחגוג')}


// משימה שניה
// תרגול 1

// const wot = prompt('מה להגיד לך 10 פעמים?')
// for(let x=0; x<10;x++)
//     {console.log(wot)
// }

// תרגול 2

// const meny = parseInt(prompt('כמה פעמים להגיד לך שלום?'))
// for(let x=0; x<meny ;x++)
//      {console.log('שלום')
// }

// // תרגול 3 

// const  someTests = parseInt(prompt('כמה מבחנים עשית?'))
// let GradeN = 0
// for(let x=0; x<someTests ;x++)
//     {let Grade = parseInt(prompt('מה הציון של המבחן ה'+(x+1)))
//     GradeN = Grade+GradeN
// }
// console.log(GradeN/someTests)

//תרגול 4

// let yourWordt = prompt('מה להגיד לך ?')

// for (;yourWordt != 'stop';)
//     {
//         yourWordt = prompt(yourWordt+',מה עוד להגיד לך ?')
//     }

//תרגול 5

// let yourNomber = parseInt(prompt('תבחר מספר'))
// let yourNomber2 =yourNomber
// for (;yourNomber2 != 1;)
//     {
//         yourNomber2 = parseInt(prompt('תבחר עוד מספר'))
//         if (yourNomber<=yourNomber2){
//             yourNomber=yourNomber2
//         }
//         console.log(yourNomber+' '+yourNomber2)
//     }
// console.log(yourNomber)

//תרגול6.1

// const wot2 = prompt('מה להגיד לך 10 פעמים?')
// let x=0
// while(x<10)
//     {console.log(wot2)
//     x++
//}

//תרגול 6.2

// const meny2 = parseInt(prompt('כמה פעמים להגיד לך שלום?'))
// let x=0
// while(x<meny2)
//      {console.log('שלום')
//      x++
// }

//תרגול 6.3

// const  someTests2 = parseInt(prompt('כמה מבחנים עשית?'))
// let GradeN2 = 0
// let x=1
// while (x<someTests2)
//     {let Grade2 = parseInt(prompt('מה הציון של המבחן ה'+(x)))
//     GradeN2 = Grade2+GradeN2
//     x++
// }
// console.log(GradeN2/someTests2)

//תרגול 7.1

// const wot3 = prompt('מה להגיד לך 10 פעמים?')
// let x=12
// do{console.log(wot3)
//     x++}
// while(x<10)

//תרגיל 7.2

// const meny3 = parseInt(prompt('כמה פעמים להגיד לך שלום?'))
// let x=0
// do{console.log('שלום')
//     x++}
// while(x<meny3)

//תרגיל 7.3

// const  someTests3 = parseInt(prompt('כמה מבחנים עשית?'))
// let GradeN3 = 0
// let x=1
// do{let Grade3 = parseInt(prompt('מה הציון של המבחן ה'+(x)))    
//     GradeN3 = Grade3+GradeN3
//     x++
// }while (x<someTests3)x
// console.log(GradeN3/someTests3)

//תרגול 7.4

// let yourWordt =""
// do{yourWordt = prompt(yourWordt+',מה להגיד לך ?')}
// while (yourWordt != 'stop')

//תרגול 7.5

// let yourNomber = 0
// let yourNomber2 = 0
// do{
//         yourNomber2 = parseInt(prompt('תבחר עוד מספר'))
//         if (yourNomber<=yourNomber2){
//             yourNomber=yourNomber2
//         }
//         console.log(yourNomber+' '+yourNomber2)
//     }
// while (yourNomber2 != 1)
// console.log('yourNomber')