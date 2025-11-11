class abc{
    name= "safik"
    run(){
        console.log("i am running")
    }
}

let a= new abc()
a.run()
console.log(a.name);

b= new abc();
b.run()

let text = "I love cats. Catsssss are very Cats easy to love. Cats are very popular."
const iterator = text.match("Cats");
console.log(iterator)
console.log(iterator instanceof Array)

let date= new Date(2005, 3, 10)
console.log(date)
