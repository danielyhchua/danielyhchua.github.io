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
  if (window.pageYOffset < workExpPos) {
    posIndex = 0;
  } else if (window.pageYOffset >= workExpPos && window.pageYOffset < eduPos) {
    posIndex = 1;
  } else if (window.pageYOffset >= eduPos && window.pageYOffset < skillsPos) {
    posIndex = 2;
  } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    posIndex = 3;
  } else if (window.pageYOffset >= skillsPos) {
    posIndex = 3;
  }
  if (posIndex > 0) {
    console.log("remove");
    console.log(navList[0]);
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