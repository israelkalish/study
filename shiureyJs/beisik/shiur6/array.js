console.log(`יש תקשורת`)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const points = [40, 100, 1, 5, 25, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// EX1.1

function assumption1(arr) {
    let narr = [];
    for (let len = 0;len<arr.length;len++) {
        narr[len] = arr[len]* arr[len];
    }
    return narr;
}
console.log(assumption1(points))

// EX1.2

function assumption2(num){return num * num;}
console.log(points.map(assumption2))

// EX2

function myFunction1(arr,typesetter){
    arr.sort();
    if (typesetter === `<`){
    arr.reverse();
    }
    return arr
}
console.log(myFunction1(fruits,`>`))
console.log(myFunction1(fruits,`<`))

// EX3.1

function last(arr,x){
    const sliceNumbers = []
    let i = 0
    do{
        sliceNumbers[i]= arr[arr.length-(1+i)]
        i++
    }
    while(x>i)
    return sliceNumbers.reverse();
}
console.log(last(fruits,2))
console.log(last(points,))

// EX3.2

function last(arr,x){
    if (!x){x=1}
    else if (x >= arr.length){x = arr.length}
    return arr.slice(arr.length-x,arr.length)
}
console.log(last(fruits,))
console.log(last(points,6))

// EX4

function noCapital(arr){return arr === arr.toLowerCase()}

const fruits2 = ["banana", "orange", "apple", "Mango"];
console.log(fruits2.filter(noCapital))

// EX5
// איזה מבין שלושת הבאים עדיפה?

//1
function reverseStr1(str) {
    const splitStr = str.split("");
    const reverseArr = splitStr.reverse();
    const joinArr = reverseArr.join("");
    return joinArr; 
}
console.log(reverseStr1("hello"))

//2
console.log(`hello`.split(``).reverse().join(``))

//3
function reverseStr(str) {return str.split(``).reverse().join(``)}
console.log(reverseStr(`hello`))

// EX6

function palindrome(arr) {return arr=== reverseStr(arr)}
console.log(["banana", "aba", "Fgf", "Mango", "NgN", "MaaM"].filter(palindrome))

// EX7

function delAnimals(arr,arr2) {
    for (let index = 0; index < arr2.length; index++) {
        arr.splice(arr.indexOf(arr2[index]),1)
    }
    return arr
}

console.log(delAnimals(["Horse", "Cow", "Sheep", "Donkey"], ["Cow", "Sheep"]))

// EX8

function guessNumber() {
    const arr2 =[]
    let i = 0
    const ind =Math.floor(Math.random()* 6)+1
    console.log(ind)
    do { 
        arr2[i] = parseInt(prompt('מה הניחוש שלך?'))
        i++
    }
    while(arr2[i-1] != ind)
    return arr2
}
console.log(guessNumber())

// EX9

function upDown(action,arr) {
    if (action=== `up`){
        return arr.sort(function(a, b){return a - b})
    }else{
        return arr.sort(function(a, b){return b - a})
    }
}

console.log(upDown(`down`,[40, 100, 1, 5, 25, 6, 7, 8, 9]))
console.log(upDown(`up`,[40, 100, 1, 5, 25, 6, 7, 8, 9]))

// EX10

const a = points.map(function(num){return num})
const b = a.filter(function(item){return item})
const c = b.slice()
const d = [...c]
a[0]= "Banana"
b[1]= "Banana"
c[2]= "Banana"
d[3]= "Banana"
console.log(a,b,c,d,points)
