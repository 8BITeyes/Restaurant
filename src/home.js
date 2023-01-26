import Rest from "./Rest.jpg";

export default function component() {
  const element = document.createElement("div");

  const title = document.createElement("h1");
  title.innerHTML = "Rocco's Restaurant";
  title.classList.add("title");

  const image = new Image();
  image.src = Rest;

  const review = document.createElement("div");
  review.innerHTML = `"Wow. What a Restaurant." ~ Rocco Botte`;
  review.classList.add("review");

  element.appendChild(title);
  element.appendChild(image);
  element.appendChild(review);

  const node = document.getElementById("content");
  node.appendChild(element);
}
