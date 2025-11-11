// let arr= [2, 3, 4, 5, 7, 4, 3, 2, 4, 6, 7]

// let ans= []
// for (let i = 0; i < arr.length; i++) {
//     count= 1;
//     for(let j= i+1 ; j < arr.length; j++){
//         if (arr[i] === arr[j]) {
//             count ++; 
//         }
//     }
//     if(count === 1 ){
//         ans.push(arr[i])
//     }
// }
// console.log(ans)
//

// ans[0]= arr[0];
// for (let i = 1; i < arr.length; i++) {
//     console.log(!contains(ans, arr[i]))
//     if (!(contains(ans, arr[i]))) {
//         ans.push(arr[i])
//     }
// }

// function contains(array, value){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return true
//         }
//     }
//     return false;
// }

// console.log(ans)


let obj= {
    name:"Safik Mahammad",
    "father-name": "Rafik Mahammad"
}


console.log(obj["name"])
console.log(obj["father-name"])
