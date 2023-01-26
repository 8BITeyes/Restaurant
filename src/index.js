import component from "./home";
import "./style.css";

const menuBody = document.querySelector("div#content");

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", function () {
  component();
});
