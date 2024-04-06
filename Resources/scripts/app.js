const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.nav_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var startYear = 2022;
    var yearRange = startYear + " - " + currentYear;
    document.getElementById("copyright").innerHTML = "&copy;" + yearRange + " Rayen Manai";
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".layout");
    const scrollWidth = scrollContainer.scrollWidth;
    const cardWidth = scrollContainer.querySelector(".studium_card").offsetWidth;
    const numCards = Math.floor(scrollWidth / cardWidth);
    const scrollStep = cardWidth;

    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");

    function scrollLeft() {
        scrollContainer.scrollBy({
            left: -scrollStep,
            behavior: "smooth"
        });
    }

    function scrollRight() {
        scrollContainer.scrollBy({
            left: scrollStep,
            behavior: "smooth"
        });
    }

    function updateScrollButtons() {
        const scrollPosition = scrollContainer.scrollLeft;
    }

    scrollContainer.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    updateScrollButtons();

    leftButton.addEventListener("click", scrollLeft);
    rightButton.addEventListener("click", scrollRight);
});
