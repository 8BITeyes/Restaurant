import Rocco from "./Rocco.jpg";

export default function aboutLoad() {
  const element = document.createElement("div");
  element.classList.add("about");

  const rocco = new Image();
  rocco.src = Rocco;
  rocco.classList.add("Rocco-image");

  const aboutRocco = document.createElement("p");
  aboutRocco.innerHTML =
    "Rocco Botte (born December 20, 1983) \
   is the creative genius behind Mega64. He was born in San Diego, California. \
   San Diego native, student, and creator of Mega64, Rocco lives a life of intrigue and suspense.";
  aboutRocco.classList.add("about-Rocco");

  element.appendChild(rocco);
  element.appendChild(aboutRocco);
  element.style.display = "none";

  const node = document.querySelector("#content");
  node.appendChild(element);
}
