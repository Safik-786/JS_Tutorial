const promiseOne = new Promise((resolve, reject) => {
    setTimeout(function () {
        // console.log("async task is complete");

        resolve()  // this method is used to connect promiseOne.then method without this  below method cant execute
    }, 1000)
})
//  consume of promise
promiseOne.then(function () {
    // console.log("promise consumed");
})



// without variable concept
new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task 2");
        resolve()
    }, 1000)
})
    .then(function () {
        // console.log("Async 2 Consumed");
    })



// parameter passing concept
const thirtPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'safix', email: 'safix@gmail.com' })   // here we can pass  array , string, int ,object
    }, 1000)
})
thirtPromise.then(function (user) {
    // console.log(user);
})



// then , Reject , catch , finally concept's
const fourthPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (error) {
            resolve({ username: "Rahul", password: "123" })
        }
        else {
            reject('Error : Something Went Wrong ')
        }
    }, 1000)
})
fourthPromise.then((user) => {
    console.log(user);
    return user.username        // it will return username's value
})
    .then((username) => {                   // chaining concept use for handling
        // console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        // console.log("Finally the promise is either resolve or reject");         // this will always executed
    })




//      Async , Await concept
const fifthPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (error) {
            resolve({ username: "javaScript", password: "1234" })
        }
        else {
            reject('Error : JS Went Wrong ')
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await fifthPromise
        // console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromiseFive()






/*
async function getAllUsers() {
    try {
        const response2 = await fetch('https://randomuser.me/api/')
        const data = await response2.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers()

*/

//  another way

fetch('https://randomuser.me/api/')             // fetch url datas
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})

