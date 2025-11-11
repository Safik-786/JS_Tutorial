gsap.from(".letter", {
    opacity: 0,
    duration:3,
    stagger: 1,
    scrollTrigger: {
        trigger: ".title",
        markers:true,
        start: "top",
        scrub:true
    }
})