
// ===================================== OBJECT LITE5RALS==============================================

const myKey = Symbol("key1")
const myObj=  {
    name : "safik",
    email : "safik@786",
    "State" : "Odisha",
    [myKey]: "fuckingKey",
    loginDays: ["sunday","tuesday","wednesday"]
}
console.log(myObj);
console.log(myObj.name);
console.log(myObj["State"]);
myObj.name="RAhUL"
myObj[myKey]="F*cking A*hole"
console.log(myObj);
// Object.freeze(myObj)                    //FREEZE CONCEPT
// myObj.name="gudu"
// console.log(myObj);

//  HOW TO ADD A EXTRA FUNCTION TO OUR OBJECT

myObj.greeting = function(){
    console.log("hii myobj");
}
myObj.greeting2 = function(){
    console.log(`greeting to ${this.name}`);        // this KEYWORD IS USE TO REFER THE CURRENT OBJECT
    //   in place of this we can use the  "  myObj   "
}
console.log(myObj.greeting());          //console.log(myObj.greeting); IT GIVES AN ERROR
console.log(myObj.greeting2());
console.log(myObj);


