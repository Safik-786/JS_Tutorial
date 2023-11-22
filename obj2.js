// ====================================  SINGLETON OBJECT(THROUGH CONSTRUCTOR)====================================
const tinderUser = new Object()
tinderUser.id = "123@786"
tinderUser.pass="safik@786"
tinderUser.isLoggedIn= false

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const regularUser = {
    email : "safik@8686.com",  
    fullName : {
        userFullName : {
            firstName : "safik",
            lastName : "Mahammaad"

        }
    }
}
console.log(regularUser.email);
console.log(regularUser.fullName.userFullName.lastName);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}
const obj3 = {obj1,obj2}
console.log(obj3 +"\n ");          //wrong way
console.log(Object.assign(obj1,obj2));