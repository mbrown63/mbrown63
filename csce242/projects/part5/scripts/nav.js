const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

navToggle.onclick = () => {
    mainNav.classList.toggle("show");
};