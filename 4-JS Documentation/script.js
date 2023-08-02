var links = document.querySelectorAll(".menu a");
var button = document.querySelector("#navbar #hamburger-icon img");

if (window.innerWidth <= 768) {
    links.forEach((link) => {
        link.classList.toggle("display");
    });
}

button.addEventListener("click", () => {
    links.forEach((link) => {
        link.classList.toggle("display");
    });
});
