let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7, 8]


let union =new Set([...arr1, ...arr2])


console.log(union)

structuredClone(arr2)

let ans= []
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]){
            ans.push(arr1[i])
            break
        }
    }
}

console.log(ans)