const balance = new Number (100);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log("vxgsrfjuygkj");
console.log(Math.E)
console.log(Math.random())
console.log(Math.max(12,34,3,2,25));
console.log(Math.floor(Math.random()*100));

//------------------DATE---------------------
let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toUTCString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
let myCreateDate = new Date(2023,0,28,5,28)
console.log(myCreateDate.toLocaleString());
let myCreateDate2= new Date("2023-01-25")
console.log(myCreateDate2.toLocaleString());
let myCreateDate3= new Date("5-01-2025")
console.log(myCreateDate3.toLocaleString());

let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime())
console.log(myCreateDate.getDate())
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let mydate3 = new Date()    //it  will give current date
console.log(mydate3.getMonth()+1);
mydate3.toLocaleString('default',{
    weekday: "long"
})

