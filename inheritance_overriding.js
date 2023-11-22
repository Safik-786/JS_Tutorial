class Animal{
    constructor(colors,name,limb){
        this.colors=colors;
        this.name=name;
        this.limb=limb;
    }
    Animalname(){
        console.log(`my name is ${this.name}`);
    }
    AnimalLimbs(){
        console.log(`i have ${this.limb}  limbs`);
    }
}
class Dog extends Animal{
    AnimalLimbs(){
        super.AnimalLimbs();            // uses of Super class
        console.log(`out of ${this.limb}limb , 2 are fore limb and onother 2 is hind limb`);
    }
    shouting(){
        console.log("i can shouting");
    }
    Dogcolor(){
        console.log(`my color  is ${this.colors}`);
    }
}
let tom = new Dog("black",'tomy', 4)
tom.Animalname()
tom.AnimalLimbs();
