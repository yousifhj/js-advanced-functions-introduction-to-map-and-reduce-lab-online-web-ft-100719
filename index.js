// Your code here


function mapToNegativize(array) {
    let newArray = []
    for ( let i = 0; i < array.length; i++ ) {
        newArray.push(array[i] * -1)
    }
    return newArray
}

function mapToNoChange(array) {
    let newArray = []
    for ( let i = 0; i < array.length; i++ ) {
        newArray.push(array[i])
    }
    return newArray
}

function mapToDouble(array) {
    let newArray = []
    for ( let i = 0; i < array.length; i++ ) {
        newArray.push(array[i] * 2)
    }
    return newArray
}

function mapToSquare(arr) {
    let newArr = []
    for ( let i = 0; i < arr.length; i++ ) {
        newArr.push(arr[i] ** 2)
    }
    return newArr
}

function reduceToTotal(array, start = 0) {
    let total = start
    for ( let i = 0; i < array.length; i++ ) {
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    let result
    for ( let i = 0; i < array.length; i++ ) {
        if (array[i]) {
            result = true
        } else {
            result = false
        }
    }
    return result
}

function reduceToAnyTrue(array) {
    let result
    for ( let i = 0; i < array.length; i++ ) {
        if (!array[i]){
            result = false
        } else {
            result = true 
        }
    }
    return result 
}