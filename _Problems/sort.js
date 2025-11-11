const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 }
];


let sortedArr= people.sort((a, b)=> a.name.localeCompare(b.name))
console.log(sortedArr)








const people2 = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 25 }
];

// Sort by age (ascending), then by name (alphabetical)
people2.sort((a, b) => {
    if (a.age !== b.age) {
        return a.age - b.age; // Primary sort by age
    } else {
        return a.name.localeCompare(b.name); // Secondary sort by name
    }
});

console.log(people2);
// Output: Bob(20), Alice(25), Charlie(25), John(25)