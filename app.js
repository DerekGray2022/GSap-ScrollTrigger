gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//     trigger: ".box",
//     start: "top 80%",
//     end: "top 50%",
//     markers: true,
//     toggleClass: "box-red"
// });

ScrollTrigger.create({
    trigger: ".box",
    start: "top 80%",
    end: "top 50%",
    markers: true,
    // onUpdate: (self) => console.log(self),
    onUpdate: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
    // onEnter: () => console.log("ENTER!"),
    // onLeave: () => console.log("LEAVE!"),
    // onEnterBack: () => console.log("ENTER BACK!"),
    // onLeaveBack: () => console.log("LEAVE BACK!"),
});


// //      NAV BAR
// ScrollTrigger.create({
//     trigger: ".panel",
//     start: "top 10%",
//     toggleClass: { targets: "nav", className: "nav-active" },
//     // markers: true
// });




