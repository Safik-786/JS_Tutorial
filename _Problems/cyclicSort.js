


let arr = [3, 4, 5, 1, 2, 6]

for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i+1){
        let correctIndex = (arr[i] - 1)
        swap(arr, i, correctIndex)
    }
}




function swap(arr, x, y) {
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}

console.log(arr)





