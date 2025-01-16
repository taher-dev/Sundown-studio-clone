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

let swiperAnimation = () => {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 50,
    breakpoints: {
      580: {
        slidesPerView: "auto",
        spaceBetween: 50,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
};

let page4H1 = document.querySelectorAll(".page-4-left-top h1");
let page4P = document.querySelectorAll(".page-4-left-bottom p");
let page4IMG = document.querySelectorAll(".page-4-wrapper img");
let page4Click = () => {
  page4H1.forEach((h1) => {
    h1.addEventListener("click", () => {
      page4H1.forEach((i) => {
        i.classList.remove("select");
      });
      h1.classList.add("select");

      let h1ID = h1.getAttribute("id");
      page4IMG.forEach((img) => {
        img.classList.add("hide");
      });
      page4P.forEach((p) => {
        p.classList.add("hide");
      });

      if (h1ID == "design-h1") {
        console.log(h1ID);
        console.log(page4P[0]);
        page4P[0].classList.remove("hide");
        page4IMG[0].classList.remove("hide");
      } else if (h1ID == "project-h1") {
        console.log(h1ID);
        console.log(page4P[1]);
        page4P[1].classList.remove("hide");
        page4IMG[1].classList.remove("hide");
      } else {
        console.log(h1ID);
        console.log(page4P[2]);
        page4P[2].classList.remove("hide");
        page4IMG[2].classList.remove("hide");
      }
    });
  });
};

page3Animation();
page4Click();
swiperAnimation();

const hamburger = document.getElementById("hamburger");
const navRight = document.getElementById("nav-right");

hamburger.addEventListener("click", () => {
  navRight.classList.toggle("show");
  hamburger.classList.toggle("active");
});

let loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 4000);
