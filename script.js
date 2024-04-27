let paragraph = document.querySelectorAll("p");
let span = document.querySelectorAll("span");
let div = document.querySelector(".text_div");
let img = document.querySelectorAll(".rt");

div.addEventListener("click", function (event) {
  div.classList.toggle("div_on_press");
  span.classList.toggle("span_on_press");
  paragraph.classList.toggle("p_on_press");
  img.classList.toggle("rotate");
});
