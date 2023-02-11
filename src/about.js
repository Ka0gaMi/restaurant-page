import Place from "./images/Place.jpg";

function createAboutTab() {
  const about = document.createElement("div");
  about.classList.add("about-us");

  about.appendChild(
    createParagraph(
      "At our burger joint, we are passionate about delivering the perfect burger experience. From our juicy, flavor-packed patties to our fresh, locally-sourced ingredients, every aspect of our menu is carefully crafted to provide you with a memorable meal."
    )
  );
  about.appendChild(
    createParagraph(
      "We believe that a great burger is the ultimate comfort food, and we are dedicated to delivering the very best to our customers. Our chefs have years of experience and are always experimenting with new and innovative recipes, ensuring that there is something for everyone on our menu."
    )
  );
  about.appendChild(
    createParagraph(
      "Our welcoming and casual atmosphere creates the perfect environment for a quick lunch, a relaxing dinner, or a fun night out with friends. We strive to provide the highest level of service and we are committed to ensuring that every guest leaves our restaurant with a smile on their face."
    )
  );
  about.appendChild(
    createParagraph(
      "So come on in, grab a seat, and let us treat you to the best burger experience in town!"
    )
  );
  about.appendChild(addImage());

  return about;
}

function createParagraph(text) {
  const para = document.createElement("h3");
  para.classList.add("para");
  para.textContent = text;

  return para;
}

function addImage() {
  const img = document.createElement("img");
  img.src = Place;
  img.classList.add("place");

  return img;
}

function loadAboutTab() {
  const main = document.querySelector(".main");

  main.textContent = "";
  main.appendChild(createAboutTab());
}

export default loadAboutTab;
