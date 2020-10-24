/*******************
 *
 *   NAVBAR
 *
 *******************/
// Get the navbar
var navbar = document.getElementById("navbar");

// Get position of all sections
var workExpPos = document.querySelector("#work-experience").offsetTop;
var eduPos = document.querySelector("#education").offsetTop;
var skillsPos = document.querySelector("#skills").offsetTop - 1;

// Get nav li items
var navList = document.querySelectorAll(".float-nav-item");

// When the user scrolls the page, execute functions
window.onscroll = function() {
  addActive();
};

// Add active class for correct scroll position
function addActive() {
  var posIndex;

  var pageHeight = document.documentElement.offsetHeight,
    windowHeight = window.innerHeight,
    scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

  if (window.pageYOffset < workExpPos) {
    posIndex = 0;
  } else if (window.pageYOffset >= workExpPos && window.pageYOffset < eduPos) {
    posIndex = 1;
  } else if (window.pageYOffset >= eduPos && pageHeight > windowHeight + scrollPosition) {
    posIndex = 2;
  } else if (pageHeight <= windowHeight + scrollPosition || window.pageYOffset >= skillsPos) {
    posIndex = 3;
  }

  if (posIndex > 0) {
    navList[0].classList.remove("active");
  }
  navList.forEach((item, i) => {
    if (posIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}