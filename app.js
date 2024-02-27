gsap.registerPlugin(ScrollTrigger);


// gsap.to(".box", { x: 250, duration: 5 });
// gsap.to(".box", { y: 250, duration: 3, delay: 2 });
// gsap.to(".box", { x: 0, y: 0, duration: 2, delay: 5 });

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1
    }
});

tl.to(".box", { x: 250, duration: 5 })
    .to(".box", { y: 250, duration: 2 })
    .to(".box", { x: 0, y: 0, duration: 2 })




