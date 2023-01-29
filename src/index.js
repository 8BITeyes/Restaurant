import homeLoad from "./home";
import "./style.css";
import menuLoad from "./menu";

const menuBody = document.querySelector("div#content");
const homeStart = document.querySelector("div.home"); //Initial page on load = same as homeLoad();

homeLoad();
menuLoad();

//Web divs/sections
let homeSection = document.querySelector(".home");
let menuSection = document.querySelector(".menu");

//Nav buttons
let homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", function () {
  homeSection.style.display = "flex";
  menuSection.style.display = "none";

  homeButton.style.backgroundColor = "grey";
  menuButton.style.backgroundColor = mainColor;
});

let menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", function () {
  homeSection.style.display = "none";
  menuSection.style.display = "grid";

  homeButton.style.backgroundColor = mainColor;
  menuButton.style.backgroundColor = "grey";
});

//css variables
let mainColor = getComputedStyle(homeButton).getPropertyValue("--second-color");
