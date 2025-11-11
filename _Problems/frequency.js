let arr= [1, 2, 3, 4, 2, 3, 4, 1, 3, 3, 2]

let freq={}
for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
        freq[arr[i]] ++
    }
    else {
        freq[arr[i]]= 1
    }
}

console.log(freq)