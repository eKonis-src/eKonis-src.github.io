$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 75,
    responsive: {
      0: {
        items: 1,
      },
      570: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerNavLinks = document.querySelectorAll(".burger-nav-links li a");

  burger.addEventListener("click", function () {
    burger.classList.toggle("toggle");
    burgerMenu.classList.toggle("active");
  });

  burgerNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burger.classList.remove("toggle");
      burgerMenu.classList.remove("active");
    });
  });
});
