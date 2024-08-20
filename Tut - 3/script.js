let path = `M 10 100 Q 500 100 990 100`;

let finalpath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", (e) => {
  path = `M 10 100 Q ${e.x} ${e.y} 990 100`;

  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.3,
    ease: "back.out",
  });
});

string.addEventListener("mouseleave", (e) => {
  gsap.to("svg path", {
    attr: {
      d: finalpath,
    },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
