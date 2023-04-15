console.log('ggg ')

function numberCheck(theNumber) {
    if (isNaN(theNumber)){
        console.log('התשובה שלך חייבת להיות מספר')
    }
}

function tesDay(day) {
    if (day === 'שבת') {
        return 7
    }else if (day === 'ראשון') {
        return 1
    }else if (day === 'שני') {
        return 2
    }else if (day === 'שלישי') {
        return 3
    }else if (day === 'רביעי') {
        return 4
    }else if (day === 'חמישי') {
        return 5
    }else if (day === 'שישי') {
        return 6
    }else {
        console.log("אין יום כזה "+day)
        return 0
    }
}

function severalTimesBig(dseveralTimesBig) {
    for (;dseveralTimesBig>15 ||dseveralTimesBig<1;) {
        if (dseveralTimesBig>15) {
            dseveralTimesBig = parseInt(prompt('כמות גדולה מדי תבחר כמות נמוכה יותר'))
        } else
        {dseveralTimesBig = parseInt(prompt('כמות קטנה מדי תבחר כמות גבוהה יותר'))
    }}
    return dseveralTimesBig
}

const myName = prompt('שלום הכנס את שמך הפרטי')
const myName2 = prompt('הכנס את שם משפחתך')
console.log('שלום', myName,myName2)

let myYearOfBirth = parseInt(prompt('מה שנת הלידה שלך'))
for (;myYearOfBirth<1923 || myYearOfBirth>2020 || isNaN(myYearOfBirth);) {
    console.log('התשובה '+myYearOfBirth+' אינה הגיונית')
    numberCheck(myYearOfBirth)
    myYearOfBirth =parseInt(prompt('מה שנת הלידה שלך'))
}
myAge = 2023 - myYearOfBirth

do{
    today = prompt('איזה יום היום')
    isToday = tesDay(today)
}
while(isToday ===0)

do{
    console.log('אנא ציין שעה במספרם לפי 24 שעות ביממה')
    hour = parseInt(prompt('מה השעה עכשיו?'))
} 
while(!(hour>=0 & hour<=24))

let temp = parseInt(prompt('מה הטמפרטורה בחוץ?'))
for (let index = 0; temp<-40 || temp>45 || isNaN(temp); index++) {
    numberCheck(temp)
    console.log ('טמפרטורה אינה הגיונית')
    temp = parseInt(prompt('מה הטמפרטורה בחוץ?'))
}

let outfit
if (temp>23){
    outfit ='תתלבש קיצי '
} else if (temp<=23 && temp>=17){
    outfit ='תתלבש ארוך '
} else {
    outfit ='תלבש מעיל '
}

let whatToDo
if (isToday <=5){
    console.log ('יום נעים')
    if(hour<=17 && hour>=8){
        whatToDo ='לך לעבוד'}
    else if (hour<8) {
        whatToDo ='לך לישון'}
    else {whatToDo ='לך לחגוג'}
    console.log (outfit+'ו'+whatToDo)
}
else{console.log ('סופש נעים '+outfit+' ולך תחגוג')}



let wordAppear = prompt('בחר מילה שיופיע לך מספר פעמים?')
let wordAppear2 = wordAppear
for (;wordAppear != 'מתעקש';){
        wordAppear2 = wordAppear
        wordAppear = prompt(wordAppear+',לא מספיק טוב תבחר משהו אחר, אאכ אתה מתעקש אז תכתוב את המילה מתעקש ?')
    }
console.log('הוחלט להשתמש במילה '+wordAppear2)

let severalTimes = parseInt(prompt('כמה פעמים להציג לך את זה?'))
severalTimes = severalTimesBig(severalTimes)
let severalTimes2
for (;severalTimes2 != 1;){
    severalTimes2 = parseInt(prompt('תבחר כמות אחרת'))
    severalTimes2 = severalTimesBig(severalTimes2)
    if (severalTimes<=severalTimes2){
        severalTimes=severalTimes2
    }
}
console.log('הוחלט שזה יוצג '+severalTimes+'פעמים')

let x=0
while(x<severalTimes){
    console.log(wordAppear2)
    x++
}

let meny = 0
let meny2 = 0
let morProduct = ''
let morProduct1 = 0

do{
    let product = prompt('מה המוצר שברצונך לדווח עליו')
    let meny4 = parseInt(prompt('כמה אתה מרוצה מה'+product+' מ1 עד 5'))
    for (;meny4<1 || meny4>5 || isNaN(meny4);) {
        console.log('התשובה שלך חייב להיות מספר בין 1 ל5')
        meny4 = parseInt(prompt('כמה אתה מרוצה מה'+product+' מ1 עד 5'))
    }
    console.log('אתה מרוצה מה'+product+' '+meny4)
    meny += meny4
    morProduct1++
    memu = 'שביעות הרצון שלך בממוצע '+ meny/morProduct1
    console.log (memu)
    console.log('כמות המוצרים שדיווחת עליהם '+morProduct1)
    morProduct = prompt('יש עוד מוצר שברצונך לדווח עליו?')
    for (;morProduct !== 'לא' & morProduct !== '' & morProduct !== 'כן';) {
        console.log('התשובה שלך לא מובנת, יש לענות בכן ולא')
        morProduct = prompt('יש עוד מוצר שברצונך לדווח עליו?')
    }
}
while(morProduct ==='כן')
