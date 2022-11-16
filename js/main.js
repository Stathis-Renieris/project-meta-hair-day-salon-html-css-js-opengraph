const mainNavigation = document.querySelector(".main-navigation");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
// const body = document.querySelector("body");

function toggleMenu() {
  if (mainNavigation.classList.contains("show-main-navigation")) {
    mainNavigation.classList.remove("show-main-navigation");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    // body.style.overflow = "auto";
  } else {
    mainNavigation.classList.add("show-main-navigation");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    // body.style.overflow = "hidden";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach((menuItem) => menuItem.addEventListener("click", toggleMenu));
