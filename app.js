gsap.registerPlugin(ScrollTrigger);

gsap.to('.square1', {
    x: 700,
    duration: 3,
    scrollTrigger: '.square2'
});



