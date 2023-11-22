

// let url = 'https://randomuser.me/api/';
// async function handlePromise() {
//     const dataJson = await fetch(url);
//     const value = await dataJson.json();
//     console.log(value);
// }
// handlePromise()

// console.log("hello world");
// console.log("hello this is safik");
// console.log("i am pretty good");
// console.log("what about you");

let url = 'https://randomuser.me/api/';
let p1 = fetch(url)
const jsonData =p1.then((response) => {
    // console.log(response.status);
    console.log(response.ok);
    return response.json()
})
jsonData.then((value2) => {
    console.log(value2);
})
