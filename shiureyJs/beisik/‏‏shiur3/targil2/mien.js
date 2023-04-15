console.log('bbb')


const name1 = prompt(' שלום הכנס את שמך הפרטי')
const name2 = prompt('הכנס את שם משפחתך')
console.log('שלום '+name1+' '+name2)
let meny = 0
let meny2 = 0
let morProduct = 'כן'
let morProduct1 = 0


for (let index = 0; morProduct ==='כן'; index++) {
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
console.log(memu)
