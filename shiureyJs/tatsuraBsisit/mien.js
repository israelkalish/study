console.log("יש תקשורת")


// function combinString(str3,str4) {
//     if (str3.length>str4.length) {
//         let str1 = str3
//         let str2 = str4
//     } else {
//         let str2 = str3
//         let str1 = str4
//     }
//     let combin = ``
//     for (let index = 0; index < str1.length; index++) {
//         combin += str1[index]
//         combin += str2[index]        
//     }
//     console.log(combin)
// }

// const clause = `מה נשמע נשמה יקרה`
// const clause2 = `מה נשמע נשמה יקרה שלי`
// combinString(clause,clause2)


// שורה 48

function name(nn,n0) {
    if (nn<n0) {
        return [nn,n0]
    }else{
        return [n0,nn]
    }
}

function big(n) {
    let s1 = name(n[0],n[1])
    let s2 = name(n[2],n[3])
    let s3 = name(n[4],n[5])
    let s4 = name(n[6],n[7])
    console.log(n[0],n[1],` `,n[2],n[3],` `,n[4],n[5],` `,n[6],n[7]) 
    
    let n1 = name(s1[0],s2[0])
    let n2 = name(s3[0],s4[0])
    let n3 = name(s1[1],s2[1])
    let n4 = name(s3[1],s4[1])
    console.log(s1[0],s2[0],` `,s3[0],s4[0],` `,s1[1],s2[1],` `,s3[1],s4[1]) 

    let f1 = name(n1[0],n2[0])
    let f2 = name(n3[0],n4[0])
    let f3 = name(n1[1],n2[1])
    let f4 = name(n3[1],n4[1])
    
    let f5 = []
    let f6 = []
    let f7 = []
    let f8 = []
    let f9 = []
    
    console.log(f1,f2,f3,f4) 
    if (f1[1]>f4[0]) {
        console.log(f1[1],f4[0],` `,n3[0],n4[0],` `,n1[1],n2[1],f2,f3) 
        if (f2[0]>f3[0]) {
            console.log(f1[0],f3[0],f2[0],f4[0],f1[1],f2[1],f3[1],f4[1]) 
        }else{
        console.log(f1[0],f2[0],f3[0],f4[0],f1[1],f3[1],f2[1],f4[1])
        }
        console.log(`hhh`)
    }else if (f2[0]>f3[1]||f2[1]<f3[0]) {
        f5 = name(f2[0],f3[0])
        f6 = name(f2[1],f3[1])
        f7 = name(f5[0],f1[1])
        f8 = name(f6[1],f4[0])

        console.log(f1[0],f7[0],f7[1],f6[0],f5[1],f8[0],f8[1],f4[1],`jklkj`) 
    }else {
        
    let fa = name(f2[0],f3[0])
    let fb = name(fa[0],f1[1])
    let fc = name(fa[1],fb[1])
    let fd = name(f4[0],f2[1])
    let fe = name(fd[0],f3[1])
    let ff = name(fd[1],fe[1])

    console.log(f1[0],fb[0],fc[0],fc[1],fe[0],ff[0],ff[1],f4[1],`מממ`) 
    }
        
        console.log(f2[0],f3[0],f1[1],` `,f4[0],f2[1],f3[1]) 
    

    // console.log(f8[0],f7[1],f6[0],f6[1]) 
    let arr = [f1[0],f7[0],f7[0],f9[0],f9[1],f8[1],f8[1],f4[1]]
    // console.log(arr)
}

big([1,3,6,4,5,2,7,8])

// function nambers(params) {
//     arr2[i] = []
//         for (let index = 0; index < 8; index++) {
//             if (!arr2.includes(i+1)) {
//                 arr2[i][index] = index+1
//             }
//         }
//     if  (i < 8){
//         i++
//         nambers(params)
//     }else {
//         i = 0
//     }
//     console.log(arr2)
// }

function nambers(i,arr) {
    while (i<8) {
        i++
        if (!arr.includes(i)) {
            arr[arr.length] = i            
        }
        arr2 = nambers(i,arr)
    }
    return arr2
}

let arr2 =[]
let ind = 0
let index = 0
do { 
    ind =Math.floor(Math.random()* 8)+1
    if (!arr2.includes(ind)) {
        arr2[index] = ind 
        index ++           
    }
}
while(index < 8)

console.log(arr2)
big(arr2)
let inde = 0


const firstName = "almog"
const lastName = "ram"
const firstName2 = "ALMOG"
const phrase =  "hello my name is Almog, i am 31 years old"

console.log(firstName.toUpperCase())
console.log(firstName2.toLowerCase())

let fullname = ''

fullname = firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + lastName.slice(1)

console.log(fullname)
console.log(firstName[0].toUpperCase())
console.log(phrase.slice(-2))
console.log(phrase.includes('ell'))
console.log(phrase.includes('elh'))
console.log(phrase.indexOf('4'))