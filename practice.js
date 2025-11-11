const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("After 10 second")
    }, 10000)
})


const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("After 5 second")
    }, 5000)
})

let myfunction = async function () {
    // resolve promise1 and return value inside response2
    let response = await promise1
    console.log(response);
    // resolve promise2 and return value inside response2
    let response2 = await promise2
    console.log(response2)
}
myfunction()
