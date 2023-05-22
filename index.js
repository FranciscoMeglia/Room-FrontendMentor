// NAVBAR
const btnNav = document.getElementById("btn"),
  nav = document.getElementById("nav"),
  html = document.body;

btnNav.addEventListener("click", () => {
  nav.classList.toggle("navMobile");

  if (nav.className === "navMobile") {
    html.style.overflow = "hidden";
  } else {
    html.style.overflow = "scroll";
  }
});

// SLIDER
let container = document.querySelector(".discover");
let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");

// BTN RIGHT EVENT SHOP
function btnshop() {
  container.scrollLeft += container.offsetWidth;
}
// BTN RIGHT EVENT
btnRight.addEventListener("click", () => {
  container.scrollLeft += container.offsetWidth;
});
// BTN LEFT EVENT
btnLeft.addEventListener("click", () => {
  container.scrollLeft -= container.offsetWidth;
});
