gsap.registerPlugin(ScrollTrigger);
const square1 = document.querySelector(".square1");

gsap.to('.square1', {
    x: 200,
    duration: 8,
    scrollTrigger: {
        trigger: '.square1',
        start: "top 60%",
        end: "top 40%",
        //      none | play | restart | reset | reverse | resume | pause | complete
        toggleActions: "restart pause resume complete",
        //      onEnter | onLeave | onEnterBack | onLeaveBack
        markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            fontSize: '1.2rem',
            indent: 30
        },
    }
});



