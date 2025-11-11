gsap.registerPlugin(ScrollTrigger);



gsap.to("#title", {
    // opacity: 0,
    // y: 100,
    transform: "translateX(-300%)",
    duration: 5,

    scrollTrigger: {
        trigger: "#title_container", // Element that triggers the animation
        scroller: "body",
        markers: true,
        start: "top top",
        end: "+=3000",  // 👈 bigger value = slower scroll animation this is responsible for the slow scroll
        pin: true,
        scrub: 1,
    }
})