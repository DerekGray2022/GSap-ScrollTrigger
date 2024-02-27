gsap.registerPlugin(ScrollTrigger);
const square1 = document.querySelector(".square1");

gsap.to('.square1', {
    x: 200,
    duration: 8,
    scrollTrigger: {
        trigger: '.square1',
        start: "top 80%",
        end: "top 30%",
        // scrub: true,
        scrub: 4,
        toggleActions: "restart none none none",
        markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            fontSize: '1.2rem',
            indent: 30
        },
    }
});



