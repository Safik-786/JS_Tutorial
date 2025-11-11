// Sorting Array
arr= [3, 5, 1, 6, 32, 7, 83]

let arrasc= arr.sort((a, b)=> a-b)
console.log(arrasc)
let arrdec= arr.sort((a, b)=> b-a)
console.log(arrdec)



// Sorting Object

let people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Peter', age: 35 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);

