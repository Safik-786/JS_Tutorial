const obj = {name: 'safik', age: 20}
const obj2 = {Fname: 'Rafik', fage: 40}

l= [obj2]
// console.log(l);
const list= {...obj , obj2}

// console.log(list);

arr=[]

let list2= [...arr, obj]
console.log(list2)

let list3=[...list2, obj2]
console.log(list3)