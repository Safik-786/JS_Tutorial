
// EXAMPLE-1

console.log("example-1")
function add(a, b) {
        console.log('callback add')
        return a + b
}
function divide(a, b) {
        console.log('callback div')
        return a / b
}

function calculate(x, y, operation) {
        console.log('normal func')
        return operation(x, y)
}

console.log(calculate(5, 4, add));
console.log(calculate(8, 4, divide));

//              EXAMPLE-2

console.log("example-1")
const calculate= (a,b,operation) =>{
        console.log('fuck')
        return operation(a,b)
}

const result= calculate(3,4,(num1,num2)=>{
        console.log('hii')
        return num1 + num2
})

console.log(result);


//              EXAMPLE-2

console.log("example-1")
//          callback function
function greet(name, callback) {
    console.log("hii!  i am "+ name);
    callback()
}

// callback function
function callMe() {
    console.log("i am callback function")
}

greet('peter',callMe)
