const hero ={
    name : 'batman' ,
    realName: 'bruce waynne',
    name2: 'spiderman',
    realname2: 'peter parker'

}
var a =hero.name;
console.log(a);

// const{name, realName,name2,realname2} = hero
// console.log(name);
// console.log(realName);
// console.log(name2);
// console.log(realname2);

// const{ name ='default'}= hero;
// console.log(name)
const{ name2 : n} = hero
console.log(n);
