let arr = new Array("safik",5, 3,3,3,"rahul")
console.log(arr);
const slc=arr.slice(0,4);
console.log(slc);

let fruit = ["apple", "banana" ,'pineapple']
console.log(fruit);
console.log(arr.length);
fruit.push("guava", "ngfht","hgd",'hdsdg')
console.log(fruit);
let arr2=fruit.splice(2,4)               // 4th index is excluded
console.log(arr2);
console.log(fruit);
console.log("last index of three is = "+arr.lastIndexOf(3));


const a= [1,3,5,4,8]
const b= ["a",'b','c','d']
// a.push(b);
console.log(a);
// console.log(a.concat(b));
let alphanum= a.concat(b);
console.log(alphanum);
console.log(...a,...b);             //spread array technique

// rarely used case
const arr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(arr3);
const newArr=arr3.flat(2);      // we can use infinity
console.log(newArr);