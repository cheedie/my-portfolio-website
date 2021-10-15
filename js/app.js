import getElement from "./getElement.js";
const navbar = getElement("#nav");
const navBtn = getElement("#nav-btn");
const closeBtn = getElement("#close-btn");
const closeModalBtn = getElement(".close-modal-btn");
const sidebar = getElement("#sidebar");
const topLink = getElement("#return-to-top");
const date = getElement("#date");
const modal = getElement("#modal-container");
const modalBtn = getElement("#modal-btn");

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// add fixed-navbar color
// document.addEventListener("scroll", () => {
//   var scroll_position = window.scrollY;
//   if (scroll_position > 250) {
//     header.style.backgroundColor = "#29323c";
//   } else {
//     header.style.backgroundColor = "transparent";
//   }
// });

// smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");

for (const link of scrollLinks) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// set year
date.innerHTML = new Date().getFullYear();

//open and close modal
modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
