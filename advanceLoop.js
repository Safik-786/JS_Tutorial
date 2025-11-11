// ====================================  for of =================================================
let language = ['ruby', 'py', 'java', "cpp"]
for (const lang of language) {
    // console.log(lang);
}
const greeting = "hello himasshu i wanna fu*k you"

for (const greet of greeting) {
    // console.log(greet);
}


let map = new Map()
map.set('IN', 'INDIA')
map.set('FR', 'FRANCE')
map.set('UK', 'UNOTED KINGDOM')
map.set('PAK', 'PAKISTAN')

for (const [k, v] of map) {
    // console.log(k);
    // console.log(v);
}
// ======================================== for in =============================================

//                            it will give key value aND FROM KEY VALUE WE CAN EXTRACT VALUE

// ========================================== filter concept==========================================

const coding = ['ruby', 'py', 'java', "cpp"]
const value = coding.forEach((val) => {
    // console.log(val);
})
// console.log("return value= ",value);

let number1 = [1, 2, 3, 4, 5, 6, 7, 8]
const nums1 = number1.forEach((num) => {
    // console.log(num);
    return num > 4
})
// console.log(nums1);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const nums = numbers.filter((num) => num>4)
// console.log(nums);

//       or

const nums = numbers.filter((num) => {
    // console.log(num)
    return num > 4;
})
// console.log(nums);



// ================================= EXAMPLE ===============================

                        // How to acces or fulter data from database
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let user = books.filter((bk)=>(bk.genre == "History"))

// user = books.filter((bk)=>{                                                // here user variable is getting updated
//     return  ( bk.publish >=1990 && bk.genre ==="History")
// })


console.log(user);


