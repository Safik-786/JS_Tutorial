class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
        // return "safik786786786@gmail.com"
    }
    set email(value){
        this._email= value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value ;
    }
}
const safik = new user('safik@786','abc123')
console.log(safik.email);
console.log(safik.password);


//                                      NOTES
/*   ->   Varible name in constructor and set, get name must be same 
     ->   set and get method's new variable should have same name as method reference but must start with _(underscore)
     ->   If we use inside set or get method  password or email instead of _password or _email then they will start 
          compete with constructor that who will set or get the the parameter value first .
     ->   Here varible (or field) _password and _email behave as private field member
     ->   Get method always return 
*/






// class Animal{
//     constructor(name){
//         this.naame= name;
//     }
//     fly(){
//         console.log('i am gonna fly');
//     }
//     get name(){
//         return this._name
//     }
        // set name(value){
        //     this._name = value;
        // }

// }
// let a = new Animal('Runo')
// a.fly()
// console.log(a.name);
