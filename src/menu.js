import Beef from "./images/Beef.jpg";
import Chicken from "./images/Chicken.jpg";
import Pork from "./images/Pork.jpg";
import Vegetarian from "./images/Vegetarian.jpg";

function createMenuTab() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createMenuItem(Beef, "Beef burger"));
  menu.appendChild(createMenuItem(Chicken, "Chicken burger"));
  menu.appendChild(createMenuItem(Pork, "Pork burger"));
  menu.appendChild(createMenuItem(Vegetarian, "Vegetarian burger"));

  return menu;
}

function createMenuItem(img, title) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("item");

  const image = document.createElement("img");
  image.src = img;
  image.classList.add("item");

  const name = document.createElement("h3");
  name.textContent = title;

  menuItem.appendChild(image);
  menuItem.appendChild(name);

  return menuItem;
}

function loadMenuTab() {
  const main = document.querySelector(".main");

  main.textContent = "";
  main.appendChild(createMenuTab());
}

export default loadMenuTab;
