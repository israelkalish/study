console.log("יש תקשורת")

// EX1

function createsAnArray(number) {
    const array =[]
    for (let index = 0; index < number ; index++) {
        array[index] = index+1;
    }
    return array
}

console.log(createsAnArray(5))

//EX2

function doubled(arr) {
    const newArr =[]
    for (let index = 0, i = 0; index < arr.length; index++, i++) {
        newArr[i] = arr[index];
        i++
        newArr[i] = arr[index];
    }
    return newArr
}
console.log(doubled([1,2,3]))

// EX3

function revers(arr) {
    const newArr =[]
    for (let index = 0; index < arr.length; index++) {
        newArr[index] = arr[arr.length-1-index];
    }
    return newArr
}
console.log(revers([1,2,3]))

// EX4

function followingNumber(numberOne) {
    const newArr =[]
    for (let index = 0; index < 10; index++) {
        newArr[index] = index+numberOne;        
    }
    console.log(newArr)
}
followingNumber(parseInt(prompt(`מה המספר הראשון של המערך?`)))

// EX5

function arrDogs() {
    const newArr =[]
    for (let index = 0; index < 3; index++) {
        const dog = {
            name: prompt(`מה השם של הכלב ה?`+(index+1)),
            weight:prompt(`מה המשקל של הכלב ה?`+(index+1)),
            age:prompt(`מה הגיל של הכלב ה?`+(index+1)),            
        };
        newArr[index] = dog
    }
    console.log(newArr)
}
arrDogs()