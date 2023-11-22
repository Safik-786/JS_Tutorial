console.log(this);
function sum(){
    var add = 2+2;
    console.log(this);
}

const user = {
    userName : "saffix",
    pass :"safik@786",
    welcomeMessage : function(){
        console.log(`welcome ${this.userName} to my page`);
    }

}
user.welcomeMessage();
user.userName="Sham"
user.welcomeMessage();