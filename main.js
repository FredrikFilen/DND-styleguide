let text = document.getElementById("welcome");
let header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.marginBottom = value * 2 + "px";
  //header.style.top = value * 0.5 + "px";
});
