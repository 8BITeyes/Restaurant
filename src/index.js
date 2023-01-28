import homeLoad from "./home";
import "./style.css";

const menuBody = document.querySelector("div#content");
const homeStart = document.querySelector("div.home");

//HOME BUTTON LOAD /HOME MODULE
const homeButton = document.querySelector("#home");

let homeDisable = false;

homeButton.addEventListener("click", function () {
  if (homeDisable === false) {
    homeStart.remove();
    homeLoad();
    disable();
    homeDisable = true;
  } else if (homeDisable === true) {
    return;
  }
});

function disable() {
  homeButton.style.backgroundColor = "grey";
}

//MENU BUTTON LOAD /MENU MODULE;
