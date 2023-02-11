// Importing tabs //
import loadHomeTab from "./home";
import loadMenuTab from "./menu";
import loadAboutTab from "./about";

// Importing CSS file //
import "./style.css";

// Creating Header //

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restName = document.createElement("h1");
  restName.textContent = "Burger Buddies";

  header.appendChild(restName);
  header.appendChild(createHeaderNav());

  return header;
}

// Creating Header Nav //

function createHeaderNav() {
  const nav = document.createElement("nav");

  // Home button //

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      activateButton(e);
      loadHomeTab();
      console.log("Home");
    }
  });

  // Menu button //

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      activateButton(e);
      loadMenuTab();
      console.log("Menu");
    }
  });

  // About button //

  const aboutBtn = document.createElement("button");
  aboutBtn.classList.add("nav");
  aboutBtn.textContent = "About us";
  aboutBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      activateButton(e);
      loadAboutTab();
      console.log("About us");
    }
  });

  // Contact button //

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav");
  contactBtn.textContent = "Contact us";
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    } else {
      activateButton(e);
      console.log("Contact us");
    }
  });

  // Adding buttons to nav //

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(aboutBtn);
  nav.appendChild(contactBtn);

  return nav;
}

// Function to switch tabs //

function activateButton(e) {
  const targetButton = e.target;
  const buttons = document.querySelectorAll(".nav");

  buttons.forEach((button) => {
    if (button.classList.contains("active"))
      [button.classList.remove("active")];
  });

  targetButton.classList.add("active");
}

// Creating Main tag //

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");

  return main;
}

// Creating Footer tag //

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const p = document.createElement("p");
  p.textContent = `Copyright © ${new Date().getFullYear()} Ka0gaMi`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/Ka0gaMi";
  githubLink.target = "_blank";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  footer.appendChild(p);
  footer.appendChild(githubLink);
  githubLink.appendChild(githubIcon);

  return footer;
}

// Creating the website //

function createWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  const homeBtn = document.querySelector(".nav");
  homeBtn.classList.add("active");
  loadHomeTab();
}

export default createWebsite;
