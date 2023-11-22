let str = "my name is safik mahammad"

// const myArr1= str.split(" ")
// const myArr2= str.split("")
// const myArr3= str.split("a")
// const myArr4= str.split()

// console.log(myArr1)
// console.log(myArr2)
// console.log(myArr3)
// console.log(myArr4)

// let splittedArr =str.split(" ")
// console.log(splittedArr)
// let newArr = splittedArr.map((val)=>{
//     return val.charAt(0).toUpperCase() + val.slice(1)
// })

// const result = newArr.join(" ")
// console.log(result)


const titleCapitalize =str.split(" ").map((word)=>{
    return word.charAt(0).toUpperCase()+ word.slice(1)
})
str.join(' ')

console.log(titleCapitalize)