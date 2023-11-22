function init() {
    var name = 'Mozilla'
    function displayName() {// display name is an inner function , a closure
        console.log(name);

    }
    name = "saffix";      // it will change the output even function execute before of it
    return displayName;
}
let c = init()
c()
function returnfunc() {


    const x = () => {
        let a = 1
        console.log(a);

        const y = () => {
            let b = 2
            // console.log(b);
            console.log(a);

            const z = () => {
                let c = 3
                // console.log(c);
                console.log(a);
            }
            z()
        }
        a= 999;
        y()
    }
    return x;           // when return x function along with it will return the lexical references
}

let a= returnfunc()
a()