import Rest from "./Rest.jpg";

export default function homeLoad() {
  const element = document.createElement("div");
  element.classList.add("home");

  const title = document.createElement("h1");
  title.innerHTML = "Rocco's Restaurant";
  title.classList.add("title");

  const image = new Image();
  image.src = Rest;
  image.classList.add("image");

  const review = document.createElement("div");
  review.innerHTML = `"Wow. What a Restaurant." ~ Rocco Botte`;
  review.classList.add("review");

  element.appendChild(title);
  element.appendChild(image);
  element.appendChild(review);

  const node = document.getElementById("content");
  node.appendChild(element);
}
