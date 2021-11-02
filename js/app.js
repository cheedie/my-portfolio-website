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
const decisionBtn = getElement("#decisionBtn");
const decisionModalContainer = getElement("#decision-modal-container");
const wixBtn = getElement("#wix-btn");
const wixModalContainer = getElement("#wix-modal-container");
const todolistBtn = getElement("#to-do-btn");
const todolistModalContainer = getElement("#todolist-modal-container");

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

decisionBtn.addEventListener("click", function () {
  decisionModalContainer.classList.add("open-modal");
});
closeModalBtn.addEventListener("click", function () {
  decisionModalContainer.classList.remove("open-modal");
});

wixBtn.addEventListener("click", function () {
  wixModalContainer.classList.add("open-modal");
});
closeModalBtn.addEventListener("click", function () {
  wixModalContainer.classList.remove("open-modal");
});

todolistBtn.addEventListener("click", function () {
  todolistModalContainer.classList.add("open-modal");
});
closeModalBtn.addEventListener("click", function () {
  todolistModalContainer.classList.remove("open-modal");
});
