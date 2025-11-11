interface Person {
    name:string;
    running(age:number, name:string, dob:string, religion:string):void;
}

class Student implements Person {
    firstName: string;
    lastName: string;
    name: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name= this.firstName+" "+this.lastName
    }
    running(age:number, name:string):void {
        console.log(age, name);
    }

    getName():void{
        console.log(this.name)
    }
}

let student1= new Student("John", "Doe");
student1.getName();
student1.running(20, "John");


// Purpose of the optionl ? modifier

interface User {
    name: string;
    // address:string;
    age?: number; // Optional property
  }
  
  const user1: User = { name: "Alice" }; // Valid
  const user2: User = { name: "Bob", age: 25 }; // Also valid

  console.log(user1.name)
  console.log(user2.age)

// qwery
// 2️⃣ Question:
// Why does this code work even though the running method in Student is missing dob and religion parameters?


// interface Person {
//     running(age: number, name: string, dob: string, religion: string): void;
// }
// class Student implements Person {
//     running(age: number, name: string): void { 
//         console.log(age, name);
//     }
// }
// ✅ Solution:
// This works due to TypeScript’s method parameter bivariance in class implementations.

// The class method can have fewer parameters than defined in the interface.

// The extra parameters (dob and religion) are ignored, but the method is still considered compatible.

// If you enable strictFunctionTypes: true, this would cause an error.