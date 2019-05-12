var sideNav = document.querySelector(".main-nav--side-nav");
var btns = document.querySelectorAll(".button");

btns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (
      btn.classList.contains("main-nav__close-nav") ||
      btn.classList.contains("main-nav__open-nav")
    ) {
      sideNav.classList.toggle("toggle-menu");
    }
  });
});

window.sr = ScrollReveal();
sr.reveal(".cheeries-img", {
  duration: 1500,
  origin: "right",
  distance: "200px",
  opacity: 0,
  easing: "ease"
});
sr.reveal(".fade-left", {
  origin: "left",
  opacity: 0,
  easing: "ease",
  distance: "200px",
  duration: 1500
});
sr.reveal(".fade-down", {
  origin: "top",
  opacity: 0,
  easing: "ease",
  distance: "200px",
  duration: 1500
});
sr.reveal(".fade-up", {
  origin: "bottom",
  opacity: 0,
  easing: "ease",
  distance: "200px",
  duration: 1500
});
sr.reveal(".fade-right", {
  origin: "right",
  opacity: 0,
  easing: "ease",
  distance: "200px",
  duration: 1500
});
