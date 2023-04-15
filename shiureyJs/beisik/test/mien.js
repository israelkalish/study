// console.log("יש תקשורת")
// כתבו פונקציה המקבלת שני מספרים ומציגה את המספר הגדול מבינהם והריצו אותה

// function bigNumber(number1,number2) {
//     if (number1>number2) {
//         console.log(number1)
//     }else if (number1<number2) {
//         console.log(number2)
//     }else {console.log('Both numbers are the same or one of the data is wrong')
//     }
// }

// const firstNumber = parseInt(prompt('תבחר מספר ראשון'))
// const secondNumber = parseInt(prompt('תבחר מספר שני'))

// bigNumber(2,5)

// כתבו את אותה הפונקציה אך הפעם קלטו את שני המספרים בתוכנית ע״י שימוש ב prompt, והריצו אותה

// function bigNumber() {
// const number1 = parseInt(prompt('תבחר מספר ראשון'))
// const number2 = parseInt(prompt('תבחר מספר שני'))
//     if (number1>number2) {
//         console.log(number1)
//     }else if (number1<number2) {
//         console.log(number2)
//     }else {console.log('Both numbers are the same or one of the data is wrong')
//     }
// }
// bigNumber()


// function bigNumber(firstNumber,secondNumber,nAccount) {
//     if (nAccount === "+") {
//         console.log(firstNumber+secondNumber)
//     } else if (nAccount === '-') {
//         console.log(firstNumber-secondNumber)
//     }else if (nAccount === '*') {
//         console.log(firstNumber*secondNumber)
//     }else if (nAccount === '/'){
//         console.log(firstNumber/secondNumber)
//     }else console.log(nAccount+'אינה פעולת חשבון')
// }

// function multiplication(firstNumber,secondNumber2) {
//     console.log(firstNumber*secondNumber2)
// }
// function Essay(firstNumber,secondNumber2) {
//     console.log(firstNumber+secondNumber2)
// }

// const number = parseInt(prompt('תבחר מספר ראשון'))
// const number2 = parseInt(prompt('תבחר מספר שני'))
// const operationAccount =prompt('תבחר פעולה (כפל או חיבור)')

// if (operationAccount ==='*') {
//     multiplication(number,number2)
// }else if(operationAccount ==='+'){
//     Essay(number,number2)
// } else {console.log(operationAccount+'אינה פעולת חשבון שהתבקש')}

// if (nAccount === "+") {
//     console.log(firstNumber+secondNumber)
// } else if (nAccoun === '-') {
//     console.log(firstNumber-secondNumber)
// }else if (nAccoun === '*') {
//     console.log(firstNumber*secondNumber)
// }else {
//     console.log(firstNumber/secondNumber)
// }


// function multiplication(firstNumber,secondNumber2) {
//     console.log(firstNumber*secondNumber2)
// }
// function Essay(firstNumber,secondNumber2) {
//     console.log(firstNumber+secondNumber2)
// }

// const number = parseInt(prompt('תבחר מספר ראשון'))
// const number2 = parseInt(prompt('תבחר מספר שני'))
// const operationAccount =prompt('תבחר פעולה (כפל או חיבור)')

// if (operationAccount ==='*') {
//     multiplication(number,number2)
// }else if(operationAccount ==='+'){
//     Essay(number,number2)
// } else {console.log(operationAccount+'אינה פעולת חשבון שהתבקש')}    

function noCapital(arr){
    for (let index = arr.length-1; index >= 0; index--) {
        if (arr[index] != arr[index].toLowerCase()) {
            arr.splice(index,1)
        }
    }
    return arr
}
function noCapital(arr){return arr === arr.toLowerCase()}

const fruits2 = ["banana", "orange", "apple", "Mango"];
console.log(fruits2.filter(noCapital))



function palindrome(arr) {
    let str = ''
    const narr = []
    for (let index = arr.length-1; index >= 0; index--) {
        str = reverseStr(arr[index])
        if (arr[index]!= str) {
            arr.splice(index,1)
        }
    }
    return arr    
}
console.log(palindrome(["banana", "aba", "Fgf", "Mango", "NgN", "MaaM"]))

function palindrome(arr) {return arr=== reverseStr(arr)}
console.log(["banana", "aba", "Fgf", "Mango", "NgN", "MaaM"].filter(palindrome))