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

let currentCardIndex = 0;
let currentMasterCardIndex = 0;
const cards = document.querySelectorAll('.studium_card');
const masterCards = document.querySelectorAll('.studium_card_master');


function showCard(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

function showMasterCard(index) {
  masterCards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

function showNextCard() {
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  showCard(currentCardIndex);
}

function showPrevCard() {
  currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
  showCard(currentCardIndex);
}

function showNextMasterCard() {
  currentCardIndex = (currentCardIndex + 1) % masterCards.length;
  showMasterCard(currentCardIndex);
}

function showPrevMasterCard() {
  currentCardIndex = (currentCardIndex - 1 + cards.length) % masterCards.length;
  showMasterCard(currentCardIndex);
}

// Initially show the first card
showCard(currentCardIndex);
