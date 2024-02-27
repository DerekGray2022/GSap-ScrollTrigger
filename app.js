gsap.registerPlugin(ScrollTrigger);
const square1 = document.querySelector(".square1");

gsap.to('.square1', {
    // x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: '.square1',
        start: "top 50%",
        // end: "center 20%",
        end: () => `+=${square1.offsetHeight}`,
        // markers: {
        //     startColor: 'purple',
        //     endColor: 'fuchsia',
        //     fontSize: '1.2rem',
        //     indent: 30
        // }
        markers: true,
        toggleClass: "red"
    }
});



