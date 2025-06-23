
// nav ber stiky

window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("header__sticky", window.scrollY > 0);
});
