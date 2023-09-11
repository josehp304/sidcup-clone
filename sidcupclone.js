var crsr = document.querySelector(".cursor");
var crsrb = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 30 + "px";
  crsr.style.top = dets.y + 30 + "px";
  crsrb.style.left = dets.x - 200 + "px";
  crsrb.style.top = dets.y - 200 + "px";
});
var navli = document.querySelectorAll(".nav li");
navli.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid white";
    crsr.style.backgroundColor = "#95c11e";
  });
});

var trg = document.querySelectorAll("#ca");
trg.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px";
    crsr.style.backgroundColor = "#95c11e";
  });
});
var trgcard = document.querySelectorAll(".card");
trgcard.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px";
    crsr.style.backgroundColor = "#95c11e";
  });
});

var trgcardw = document.querySelectorAll(".cardw");
trgcardw.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px";
    crsr.style.backgroundColor = "#95c11e";
  });
});

gsap.to(".nav", {
  backgroundColor: "black",
  height: "120px",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -20%",
    end: "top -21%",
    scrub: 2,

    // markers: true,
  },
});

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "10%",
    end: "50%",
    scrub: 2,
    // markers: true,
  },
});

gsap.from("#up", {
  x: -100,
  y: -100,
  scrollTrigger: {
    trigger: ".quotes",
    scroller: "body",

    // start: "10%",
    // end: "100",
    scrub: 3,
    duration: 2,
  },
});

gsap.from("#down", {
  x: 100,
  y: 100,
  scrollTrigger: {
    trigger: ".quotes",
    scroller: "body",
    scrub: 3,
  },
});

gsap.from(".about", {
  y: 300,
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from(".card_container", {
  x: -200,
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",

    // markers: true,
    scrub: 3,
  },
});

gsap.from(".signup .content3", {
  x: 400,
  y: 80,
  scrollTrigger: {
    trigger: ".signup",
    scroller: "body",

    // markers: true,
    scrub: 3,
  },
});

gsap.from(".waiting h1", {
  y: 30,
  scrollTrigger: {
    trigger: ".waiting",
    scroller: "body",
    scrub: 3,
    duration: 2,
  },
});
