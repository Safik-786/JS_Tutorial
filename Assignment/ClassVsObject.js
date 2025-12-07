// Needs of oops
// what is object
// what is class
// what is constructor
// what is methods



class User {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }

    getResponse() {
        console.log(`Name ${this.name}, Email: ${this.email}, Password: ${this.password}`)
    }
    login() {
        console.log("logged in successfully...")
    }
    logout() {
        console.log("logged out successfuflly...")
    }
}

// let user1= new User("Safik", "ytsafk2@gmail.c0", "wejhfdwhefuweu")
// user1.getResponse()


class Product{
    static totalProduct;
    constructor(name, price, quantity){
        this.name= name
        this.price= price
        Product.totalProduct= quantity
    }
    orderProducts(quantity){
        console.log(`Total Product: ${quantity}`)
        Product.totalProduct= Product.totalProduct-quantity
        console.log("product ordered successfully...")
    }

    getProductInfo(){
        console.log(`Product Name: ${this.name}`)
        console.log(`Product Price: ${this.price}`)
        console.log(`Total Product: ${Product.totalProduct}`)
    }
    static getProduct(){
        console.log(`Total Product: ${Product.totalProduct}`)
    }

    addProduct(quantity){
        Product.totalProduct= Product.totalProduct+quantity
        console.log("product added successfully...")
    }
}


const topwear= new Product("T-shirt", 1000, 10)
topwear.getProductInfo()
topwear.orderProducts(2)
topwear.getProductInfo()