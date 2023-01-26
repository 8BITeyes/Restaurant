import Rest from "./Rest.jpg";

function component() {
  const element = document.createElement("div");

  const title = document.createElement("h3");
  title.innerHTML = "Rocco's Restaurant";

  const image = new Image();
  image.src = Rest;

  const review = document.createElement("div");
  review.innerHTML = `"Wow. What a Restaurant." ~ Rocco Botte`;

  element.appendChild(title);
  element.appendChild(image);
  element.appendChild(review);

  return element;
}

let restPage = document.querySelector("div#content");
restPage.appendChild(component());
