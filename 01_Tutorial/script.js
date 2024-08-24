// gsap.to("#box1", {
//   x: 1000,
//   delay: 1,
//   duration: 2,
//   borderRadius: "50%", //? we can add core css property
// });
// gsap.to("#box2", {
//   x: 1000,
//   delay: 3,
//   duration: 2,
//   rotate: 360,
// });
// gsap.to("#box3", {
//   x: 1000,
//   delay: 3,
//   duration: 2,
//   rotate: 360,
//   repeat: 1, //? how many times an animation should repeat after it completes. -1 for an infinite loop.
//   yoyo: true, //? allows you to create animations that reverse direction after reaching the end, then play again from the start, repeatedly.
// });


//! ````````````````````````````````````````````````````````````````

// gsap.from("h1", {
//   y: 30,
//   duration: 1,
//   opacity: 0,
//   stagger: 1, //? run one by one similar elements (its runs top to buttom)
//   stagger: -1, //? run one by one similar elements (its runs buttom to top )
// });

//! `````````````````````````````````````````````````````````````````

//* creating a timeline

// let tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1000,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
//   borderRadius: "50%",
// });
// tl.to("#box2", {
//   x: 1000,
//   duration: 2,
//   rotate: 360,
//   backgroundColor: "blue",
// });
// tl.to("#box3", {
//   x: 1000,
//   duration: 2,
//   rotate: 360,
//   scale: 1.5
// });


//* creating navbar animation

let tl = gsap.timeline();

tl.from(".left h2",{
    y: -20,
    opacity: 0,
    delay: 0.5,
    duration: 1,
})
tl.from(".right h3",{
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})
tl.from("#main h1",{
    y: 20,
    opacity: 0,
    duration: 1,
    scale: 0.2
})