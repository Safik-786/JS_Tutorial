var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = this.firstName + " " + this.lastName;
    }
    Student.prototype.running = function (age, name) {
        console.log(age, name);
    };
    Student.prototype.getName = function () {
        console.log(this.name);
    };
    return Student;
}());
var student1 = new Student("John", "Doe");
student1.getName();
student1.running(20, "John");
var user1 = { name: "Alice" }; // Valid
var user2 = { name: "Bob", age: 25 }; // Also valid
console.log(user1.name);
console.log(user2.age);
