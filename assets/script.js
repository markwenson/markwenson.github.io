
const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");
if (menu) menu.addEventListener("click", () => links.classList.toggle("open"));

document.querySelectorAll("[data-year]").forEach(el => {
  el.textContent = new Date().getFullYear();
});
