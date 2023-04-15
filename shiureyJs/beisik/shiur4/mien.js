console.log('יש תקשורת')

// תרגיל 1

function last2(str) {
    const stringsLength = str.length
    // console.log(str[stringsLength-2],str[stringsLength-1]) //בוטל עקב מציאת פיתרון עדיף
    console.log(str.slice(-2))
}

const clause = `מה נשמע נשמה יקרה`
last2(clause)

// תרגיל 2

function display(str) {
    for (let index = 0; index < str.length; index++) {
        console.log(str[index]);
        
    }
}

const uClause = prompt('מה להציג בפניך?')
display(uClause)

// תרגיל 3

function someTimes(str,letter) {
    let indexLength = 0
    for (let index = 0; index < str.length; index++) {
        if(str[index]===letter){
            indexLength ++
        }
    }
    return indexLength
}

const clause2 = `מה נשמע נשמה יקרה`
const someTimesLength = someTimes(clause2,`ש`)
console.log(someTimesLength)

// תרגיל 4

function combinString(str1,str2) {
    let combin = ``
    for (let index = 0; index < str1.length; index++) {
        combin += str1[index]
        combin += str2[index]        
    }
    return combin
}

const clause3 = `מה נשמע נשמה יקרה`
const clause4 = `מה נשמע נשמה יקרה`
const combination = combinString(clause3,clause4)
console.log(combination)

// תרגיל 5

function combinString2(str3,str4) {
    let str1 = ``
    let str2 = ``
    if (str3.length>str4.length) {
        str1 = str3
        str2 = str4
    } else {
        str2 = str3
        str1 = str4
    }
    let combin = ``
    for (let index = 0; index < str1.length; index++) {
        combin += str1[index]
        if (str2[index]) {
            combin += str2[index]  
        }else{
            combin += ` `
        } 
    }
    return combin
}

const clause5 = `מה נשמע נשמה יקרה`
const clause6 = `מה נשמע נשמה יקרה שלי`
const combination2 = combinString2(clause5,clause6)
console.log(combination2)


const clause15 = `מה נשמע נשמה יקרה שלי`
const clause16 = `מה נשמע נשמה יקרה`
const combination12 = combinString2(clause15,clause16)
console.log(combination12)

// תרגיל 6

function unique(str) {
    let combin = ``
    for (let index = 0; index < str.length; index++) {
        if (str.indexOf(str[index]) === index) {
            combin += str[index]
        }
    }
    return combin
}

const clause7 = `מה נשמע נשמה יקרה שלי`
const unique1 = unique(clause7)
console.log(unique1)

// תרגיל 7

function letterOne(str) {
    for (let index = 0; index < str.length; index++) {
        if (str.indexOf(str[index]) === str.lastIndexOf(str[index])) {
            return str[index]
        }
    }
}

const clause8 = `מה נשמע נשמה יקרה שלי`
const letterOne1 = letterOne(clause8)
console.log(letterOne1)

// תרגיל 7.1
// עקב שהבנתי שפתרתי את התרגיל אחרי שראיתי איך אתה פתרת החלטתי לפתור שנית

function letterOne(str) {
    for (let index = 0; index < str.length ; index++) {
        for (let i = 0; i < str.length; i++) {
            if (index != i) {
                if (str[index]===str[i]) {
                    console.log(i, index)
                    break                
                }else if (i === str.length-1) {
                    return str[index]
                }
            }
        }
    }
}

let deLetter = letterOne('dfghjtfcvbnjkd')
console.log(deLetter)


// פתרון לרווחים באמצע שורה

function profits(str) {
    while (str.includes(`  `)) {
        str = str.replace(`  `,` `)
        console.log(str)
    }
    return str
}

let clause9 = `מה           נשמע     נשמה     יקרה        שלי`
clause9 =profits(clause9)
console.log(clause9)
