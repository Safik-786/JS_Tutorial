// function sqr( x){
//     return x*x;
// }
let sqr = function (x) {                                      // Function literal
    return x * x
}
function hypotaneous(x, y) {
    return (Math.sqrt(sqr(x) + sqr(y)))
}
console.log("hypotaneous of 3 ,4 is =", hypotaneous(3, 4));


// ============================================== ARROW FUNCTION ================================================

let sum = (a, b) => (a + b)

console.log("sum:" + sum(28, 42));

let abc =()=>{
    console.log("i am abc function");
}
abc()