import Home1 from "./images/Home1.jpg";
import Home2 from "./images/Home2.jpg";
import Home3 from "./images/Home3.jpg";
import Home4 from "./images/Home4.jpg";

function createHomeTab() {
  const home = document.createElement("div");

  const homeText = document.createElement("h3");
  homeText.textContent =
    "Welcome to our burger joint, where we serve up juicy, flavorful burgers that are sure to satisfy your cravings. Our menu features a variety of classic and creative burger options, made with only the freshest ingredients and cooked to perfection. Whether you're in the mood for a classic cheeseburger, a spicy BBQ bacon burger, or a veggie burger, we've got something for everyone. So come on in, grab a seat, and experience the ultimate in burger bliss.";

  home.appendChild(homeText);
  home.appendChild(createImageGrid());

  return home;
}

function createImageGrid() {
  const homeImagesDiv = document.createElement("div");
  homeImagesDiv.classList.add("images");

  const img1 = document.createElement("img");
  img1.src = Home1;

  const img2 = document.createElement("img");
  img2.src = Home2;
  img2.classList.add("fitted");

  const img3 = document.createElement("img");
  img3.src = Home3;

  const img4 = document.createElement("img");
  img4.src = Home4;

  homeImagesDiv.appendChild(img1);
  homeImagesDiv.appendChild(img2);
  homeImagesDiv.appendChild(img3);
  homeImagesDiv.appendChild(img4);

  return homeImagesDiv;
}

function loadHomeTab() {
  const main = document.querySelector(".main");

  main.textContent = "";
  main.appendChild(createHomeTab());
}

export default loadHomeTab;
