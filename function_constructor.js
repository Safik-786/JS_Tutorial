function Person(name){
    let obj= {}
    obj.name= name;
    obj.age= 21
    return obj
}

let person1= new Person('Safik')

// console.log(person1)

function Animal() {}
Animal.prototype.speak = function() {
    console.log('Animal sound');
};

const dog = new Animal();
dog.speak(); // Outputs: Animal sound


let name= {name:'Rahul'}
console.log(Object.getPrototypeOf(name))
