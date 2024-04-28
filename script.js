let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector(".p4");
let p5 = document.querySelector(".p5");

let sp1 = document.querySelector(".sp1");
let sp2 = document.querySelector(".sp2");
let sp3 = document.querySelector(".sp3");
let sp4 = document.querySelector(".sp4");
let sp5 = document.querySelector(".sp5");

let img1 = document.querySelector(".rt1");
let img2 = document.querySelector(".rt2");
let img3 = document.querySelector(".rt3");
let img4 = document.querySelector(".rt4");
let img5 = document.querySelector(".rt5");

let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let div4 = document.querySelector(".div4");
let div5 = document.querySelector(".div5");

function press(div, img, span, paragraph) {
  div.classList.toggle("div_on_press");
  span.classList.toggle("on_press");
  paragraph.classList.toggle("p_on_press");
  img.classList.toggle("rotate");
}

div1.addEventListener("click", function () {
  press(div1, img1, sp1, p1);
});

div2.addEventListener("click", function () {
  press(div2, img2, sp2, p2);
});

div3.addEventListener("click", function () {
  press(div3, img3, sp3, p3);
});

div4.addEventListener("click", function () {
  press(div4, img4, sp4, p4);
});

div5.addEventListener("click", function () {
  press(div5, img5, sp5, p5);
});
