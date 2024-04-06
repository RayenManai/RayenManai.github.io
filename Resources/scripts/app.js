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
