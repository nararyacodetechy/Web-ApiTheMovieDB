const menuBar = document.querySelector("nav .menu-bar input");
const nav = document.querySelector("nav links-nav");

menuBar.addEventListener("click", () => nav.classList.toggle("slide-active"));
