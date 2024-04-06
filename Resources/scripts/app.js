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

function leftScroll() {
    const scrollImages = document.querySelector(".layout");
    scrollImages.scrollBy({
        left: -200,
        behavior: "smooth"
    });
}

function rightScroll() {
    const scrollImages = document.querySelector(".layout");
    scrollImages.scrollBy({
        left: 200,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector(".layout");
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");

    function checkScroll() {
        const currentScroll = scrollImages.scrollLeft;
        if (currentScroll === 0) {
            leftButton.setAttribute("disabled", "true");
            rightButton.removeAttribute("disabled");
        } else if (currentScroll === scrollLength) {
            rightButton.setAttribute("disabled", "true");
            leftButton.removeAttribute("disabled");
        } else {
            leftButton.removeAttribute("disabled");
            rightButton.removeAttribute("disabled");
        }
    }

    scrollImages.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();

    leftButton.addEventListener("click", leftScroll); 
    rightButton.addEventListener("click", rightScroll); 
});
