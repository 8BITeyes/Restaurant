import Pizza from "./Pizza.jpg";
import Chips from "./Chips.jpg";
import Dew from "./MtnDew.jpg";
import Corn from "./Corn.jpg";

export default function menuLoad() {
  const element = document.createElement("div");
  element.classList.add("menu");

  //PIZZA CONTENT
  const pizzaDiv = document.createElement("div");
  pizzaDiv.classList.add("section");

  const pizza = new Image();
  pizza.src = Pizza;
  pizza.classList.add("pizza");

  const pizzaReview = document.createElement("p");
  pizzaReview.innerHTML = `"Wow. What an exquisite pizza." ~ Rocco Botte - $64.64`;
  pizzaReview.classList.add("review");

  pizzaDiv.appendChild(pizza);
  pizzaDiv.appendChild(pizzaReview);

  //CHIPS CONTENT
  const chipsDiv = document.createElement("div");
  chipsDiv.classList.add("section");

  const chips = new Image();
  chips.src = Chips;
  chips.classList.add("chips");

  const chipsReview = document.createElement("p");
  chipsReview.innerHTML = `"Wow. What exquisite chips." ~ Rocco Botte - $64.64`;
  chipsReview.classList.add("review");

  chipsDiv.appendChild(chips);
  chipsDiv.appendChild(chipsReview);

  //DEW CONTENT
  const dewDiv = document.createElement("div");
  dewDiv.classList.add("section");

  const dew = new Image();
  dew.src = Dew;
  dew.classList.add("dew");

  const dewReview = document.createElement("p");
  dewReview.innerHTML = `"Dew the dew." ~ Johnny - $64.64`;
  dewReview.classList.add("review");

  dewDiv.appendChild(dew);
  dewDiv.appendChild(dewReview);

  //CORN CONTENT
  const cornDiv = document.createElement("div");
  cornDiv.classList.add("section");

  const corn = new Image();
  corn.src = Corn;
  corn.classList.add("corn");

  const cornReview = document.createElement("p");
  cornReview.innerHTML = `"How's the corn this year?" ~ Rocco Botte - $64.64`;
  cornReview.classList.add("review");

  cornDiv.appendChild(corn);
  cornDiv.appendChild(cornReview);

  //APPEND ALL ELEMENTS TO MAIN DIV
  element.appendChild(pizzaDiv);
  element.appendChild(chipsDiv);
  element.appendChild(dewDiv);
  element.appendChild(cornDiv);
  element.style.display = "none"; //SETS INITAL DISPLAY TO NONE FOR MAIN PAGE

  //APPEND MAIN DIV TO MAIN SECTION OF PAGE
  const node = document.getElementById("content");
  node.appendChild(element);
}
