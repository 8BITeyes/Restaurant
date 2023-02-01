import homeLoad from "./home";
import "./style.css";
import menuLoad from "./menu";
import aboutLoad from "./about";

homeLoad();
menuLoad();
aboutLoad();

//Web divs/sections
let homeSection = document.querySelector(".home");
let menuSection = document.querySelector(".menu");
let aboutSection = document.querySelector(".about");

//Nav buttons
let homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", function () {
  homeSection.style.display = "flex";
  menuSection.style.display = "none";
  aboutSection.style.display = "none";

  homeButton.style.backgroundColor = "grey";
  menuButton.style.backgroundColor = mainColor;
  aboutButton.style.backgroundColor = mainColor;
});

let menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", function () {
  homeSection.style.display = "none";
  menuSection.style.display = "grid";
  aboutSection.style.display = "none";

  homeButton.style.backgroundColor = mainColor;
  menuButton.style.backgroundColor = "grey";
  aboutButton.style.backgroundColor = mainColor;
});

let aboutButton = document.querySelector("#about-button");
aboutButton.addEventListener("click", function () {
  homeSection.style.display = "none";
  menuSection.style.display = "none";
  aboutSection.style.display = "flex";

  homeButton.style.backgroundColor = mainColor;
  menuButton.style.backgroundColor = mainColor;
  aboutButton.style.backgroundColor = "grey";
});

//css variables
let mainColor = getComputedStyle(homeButton).getPropertyValue("--second-color");
