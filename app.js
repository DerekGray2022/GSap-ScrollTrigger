gsap.registerPlugin(ScrollTrigger);
const square1 = document.querySelector(".square1");

gsap.to('.square1', {
    // x: 200,
    duration: 8,
    scrollTrigger: {
        trigger: '.square2',
        start: "top 80%",
        end: "top 40%",
        // scrub: true,
        scrub: 4,
        // pin: true,
        pin: ".square1",
        // pinSpacing: false,
        pinSpacing: true,
        toggleActions: "restart none none none",
        markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            fontSize: '1.2rem',
            indent: 30
        },
    }
});



