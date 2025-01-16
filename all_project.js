const hamburger = document.getElementById("hamburger");
const navRight = document.getElementById("nav-right");

hamburger.addEventListener("click", () => {
  navRight.classList.toggle("show");
  hamburger.classList.toggle("active");
});

let page3Animation = () => {
  let featuredContainer = document.querySelector("#page-3-featured-container");
  let fixedImage = document.querySelector("#fixed-image");

  // Display Fixed Image on Hover and Click

  featuredContainer.addEventListener("mouseenter", () => {
    fixedImage.style.display = "block";
  });
  featuredContainer.addEventListener("click", () => {
    fixedImage.style.display = "block";
  });

  // Hide Fixed Image on Mouse Leave

  featuredContainer.addEventListener("mouseleave", () => {
    fixedImage.style.display = "none";
  });

  let allFeatured = document.querySelectorAll(".page-3-featured");

  allFeatured.forEach((featured) => {
    featured.addEventListener("mouseenter", () => {
      let image = featured.getAttribute("data-image");
      fixedImage.style.backgroundImage = `url(${image})`;
    });
  });
};

page3Animation();
