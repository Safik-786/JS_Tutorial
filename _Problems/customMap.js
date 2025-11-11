function map(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let transformedValue = callback(arr[i], i, arr)
        result.push(transformedValue)
    }

    return result
}

function filter(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let transformedValue = callback(arr[i], i, arr)
        if (transformedValue) {
            result.push(arr[i])
        }

    }
    return result
}

let arr = []

arr.map()

