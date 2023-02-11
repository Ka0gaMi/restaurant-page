import Phone from "./images/phone.svg";
import Map from "./images/map-marker.svg";
import googleMaps from "./images/Maps.png";

function createContactTab() {
  const contact = document.createElement("div");
  contact.classList.add("contact-us");

  contact.appendChild(createPhoneDiv());
  contact.appendChild(createAddressDiv());
  contact.appendChild(addImage());

  return contact;
}

function createPhoneDiv() {
  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("contact");

  const phone = document.createElement("img");
  phone.classList.add("svg");
  phone.src = Phone;

  const phoneNumber = document.createElement("h3");
  phoneNumber.textContent = "0123 456 789";

  phoneDiv.appendChild(phone);
  phoneDiv.appendChild(phoneNumber);

  return phoneDiv;
}

function createAddressDiv() {
  const addressDiv = document.createElement("div");
  addressDiv.classList.add("contact");

  const home = document.createElement("img");
  home.classList.add("svg");
  home.src = Map;

  const address = document.createElement("h3");
  address.textContent = "Labdaru street 2, 01120 Vilnius";

  addressDiv.appendChild(home);
  addressDiv.appendChild(address);

  return addressDiv;
}

function addImage() {
  const img = document.createElement("img");
  img.src = googleMaps;
  img.classList.add("contact");

  return img;
}

function loadContactTab() {
  const main = document.querySelector(".main");

  main.textContent = "";
  main.appendChild(createContactTab());
}

export default loadContactTab;
