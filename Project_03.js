let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d= a.getDate()
console.log(h,m,s,d)



const clock = document.getElementById('clock')
const calender = document.getElementById('calender')


setInterval(function(){
    let date= new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML= date.toLocaleTimeString()
    calender.innerHTML= date.toLocaleDateString()
} ,1000)