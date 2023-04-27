console.log(`יש תקשורת`);

//תרגיל 1

const cat = {
    name: `pingwin`,
    color: `blak`,
    age: 4,
    canDo: {
        sayMewo: console.log(`מיאווווו`),
        jump: 182
    }
}

console.log(cat)

// תרגיל 2

const newFeature = prompt('הוסף מידע על החתול')
const dnewFeature = prompt('מה ה'+newFeature+` של החתול?`)

cat[newFeature] = dnewFeature
console.log(cat)

// תרגיל 3

function checkingIfThereIsSuchANameForTheCat(dcat,kay1) {
    if (dcat[`name`]=== kay1) {
        return true
    }else{
        return false
    }
}

const ifTheCatsName = checkingIfThereIsSuchANameForTheCat(cat,`pingwin`)
const ifTheCatsName2 = checkingIfThereIsSuchANameForTheCat(cat,`GGG`)
console.log(ifTheCatsName,ifTheCatsName2)

// תרגיל 4


const cat2 = {
    name2: `pingwin`,
    color2: `blak`,
    age2: 4,
    canDo2: {
        sayMewo: console.log(`מיאווווו`),
        jump: 182
    }
}


function connectionOfTwoObjects(object1,object2) {
    for (const key in object2) {
        object1[key] = object2[key]         
    }
} 

connectionOfTwoObjects(cat,cat2)
console.log(cat)

// תרגיל 5

const ca2 = {}
for (let index = 0; index < 3; index++) {
    ca2[index+1] = prompt('מה שם החתול')
}
console.log(ca2)

// תרגיל 6

const cat3 = {}
for (let index = 0; index < 3; index++) {
    cat3[index+1] = {name: prompt('מה שם החתול')}
}
console.log(cat3)

const checkName = prompt('איזה שם נתת לחתול?')
for (const key in cat3) {
    console.log(checkingIfThereIsSuchANameForTheCat(cat3[key],checkName))
}
