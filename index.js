const burguerBars = document.getElementById("burguer");
const navMenu = document.getElementById("nav__menu");
const closer = document.getElementById("close");
burguerBars.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  navMenu.classList.remove("ocult");
  burguerBars.classList.toggle("disabled");
  closer.classList.toggle("enable");
});
closer.addEventListener("click", function () {
  navMenu.classList.toggle("ocult");
  navMenu.classList.remove("show");
  closer.classList.toggle("disabled");
  closer.classList.remove("enable");
  burguerBars.classList.remove("disabled");
});
