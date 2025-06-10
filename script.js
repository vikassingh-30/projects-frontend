
var tl = gsap.timeline();

tl.from("div h4",{
    y:-50,
    duration:0.5,
    opacity:0,
    delay:0.2,
    stagger:0.4,
    // color:"grey"
})
tl.from(" h1",{
x:-500,
opacity:0,
duration:0.7,
stagger:0.6
})

tl.from("img", {
  transform: "translateX(100px) rotate(45deg)",
  opacity: 0,
  stagger: 0.5,
  duration: 0.8,
});


