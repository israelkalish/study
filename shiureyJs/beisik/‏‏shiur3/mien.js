console.log("יש תקשורת")

// תרגיל 1

function showName(firstName,lastName) {
    console.log(firstName +' '+ lastName)
}

const name1 = prompt('שם פרטי')
const name2 = prompt('שם משפחה')
showName(name1,name2)

// תרגיל 2

function bigNamber(numberOne,numberTwo,numberThree) {
    if (numberOne>numberTwo&numberOne>numberThree) {
            console.log(numberOne) 
        }
    else if (numberTwo>numberThree) {
        console.log(numberTwo) 
    }
    else {console.log(numberThree) }
}

 const number1 = parseInt(prompt('הכנס מספר'))
 const number2 = parseInt(prompt('הכנס מספר שני'))
 const number3 = parseInt(prompt('הכנס מספר שלישי'))

 bigNamber(number1,number2,number3)

//  תרגיל 3

 function rationalNumber(number) {
    if (number>0) {
        console.log('חיובי')
    }else if (number<0) {
        console.log('שלילי')
    }else {console.log(0)}
 }

 let num =0
 for (let index = 0; index < 3; index++) {
    num = parseInt(prompt('תבחר מספר'))
    rationalNumber(num)
 }

// תרגיל 4

function adult(name1,age) {
    if (age<=70 & 18<=age) {
        console.log('שלום '+name1+' אתה מוזמן לתוכנית שלנו')
    }else{console.log('מצטערים, הגיל שלך אינו מאפשר לנו להמשיך בתוכנית')}
}

function ageAcceptance() {
    const name2 = prompt('שם ושם משפחה')
    const age2 = parseInt(prompt('מה הגיל שלך?'))
    adult(name2,age2)
}

for (let index = 0; index < 2; index++) {
    ageAcceptance()    
}

// תרגיל 5

function even(number2) {
    if(number2 % 2 == 0) {
        console.log('המספר זוגי');
    }
    else {
        console.log('המספר אי זוגי');
    }
}

for (let index = 0; index < 3; index++) {
    let number = prompt('הכנס מספר');
    even(number)
}