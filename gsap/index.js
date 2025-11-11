
// let t1 = gsap.timeline()

// gsap.from("h2", {
//     opacity: 0,
//     y: "200px",
//     delay: .1,
//     // duration:2,
//     stagger: .3
// })



let title = document.getElementById("title")
let titleData = title.innerHTML



console.log(titleData.split(""))
title.innerHTML = titleData.split("").map((letter) => {
    if (letter === " ") return `<span class="title_letter text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-700">&nbsp;</span>`;
    return `<span class="title_letter inline-block bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">${letter}</span>`
}).join("")



gsap.from(".title_letter", {
    opacity: 0,
    y: 50,
    // delay: .3,
    stagger: 0.1, // controls delay between letters
    //   duration: 0.8,
    ease: "bounce.out"
})