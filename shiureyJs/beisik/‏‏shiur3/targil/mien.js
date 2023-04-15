// console.log('bbb')

function ifThereAreMore() {
    let morProduct = prompt('יש עוד מוצר שברצונך לדווח עליו?')
    if (morProduct ==='כן') {
        theProduct()
    } else if (morProduct !== 'לא' & morProduct !== '') {
        console.log('התשובה שלך לא מובנת, יש לענות בכן ולא')
        ifThereAreMore() 
    }
}

function theProduct() {
    let product = prompt('מה המוצר שברצונך לדווח עליו')
    meny2 = satisfiedLevel(product)
    console.log('אתה מרוצה מה'+product+' '+meny2)
    meny += meny2
    morProduct1++
    memu = 'שביעות הרצון שלך בממוצע '+ meny/morProduct1
    console.log (memu)
    ifThereAreMore()
    console.log(morProduct1)
    return memu
}

function satisfiedLevel(product2) {
    let meny4 = parseInt(prompt('כמה אתה מרוצה מה'+product2+' מ1 עד 5'))
    if (meny4<1 || meny4>5 || isNaN(meny4)) {
        console.log('התשובה שלך חייב להיות מספר בין 1 ל5')
        meny4 = satisfiedLevel (product2)
    }
    return meny4
}

let meny = 0
let meny2 = 0
let morProduct1 = 0

const name1 = prompt(' שלום הכנס את שמך הפרטי')
const name2 = prompt('הכנס את שם משפחתך')
console.log('שלום '+name1+' '+name2)
let memu1 = theProduct()
console.log(memu1)
