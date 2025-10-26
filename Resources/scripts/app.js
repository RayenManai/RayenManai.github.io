const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".nav_menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var startYear = 2022;
  var yearRange = startYear + " - " + currentYear;
  document.getElementById("copyright").innerHTML =
    "&copy;" + yearRange + " Rayen Manai";
});

let currentSlide = 1;
showSlide(currentSlide);

function changeSlide(n) {
  showSlide((currentSlide += n));
}

function goToSlide(n) {
  showSlide((currentSlide = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.querySelectorAll(".dots span");

  if (n > slides.length) currentSlide = 1;
  if (n < 1) currentSlide = slides.length;

  for (let slide of slides) {
    slide.style.display = "none";
  }

  for (let dot of dots) {
    dot.classList.remove("active");
  }

  slides[currentSlide - 1].style.display = "block";
  dots[currentSlide - 1].classList.add("active");
}
