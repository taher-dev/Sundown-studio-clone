/*-----------------------
Hamburger menu  
-------------------------*/
const hamburger = document.getElementById("hamburger");
const navRight = document.getElementById("nav-right");

hamburger.addEventListener("click", () => {
  navRight.classList.toggle("show");
  hamburger.classList.toggle("active");
});
