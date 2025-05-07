function toggleMenuVisibile(event) {
  const hamburger = event.currentTarget;

  document.querySelector(".menu-toggle").classList.add("menu-toggle-Visibile");
  document.querySelector(".logIn").classList.add("logIn-Visibile");
  document.querySelector(".nav-bar").classList.add("nav-bar-Visibile");
  document
    .querySelector(".menu-toggle-media")
    .classList.add("menu-toggle-media-Visibile");

  document
    .querySelector(".menu-toggle")
    .classList.remove("menu-toggle-Invisible");
  document.querySelector(".logIn").classList.remove("logIn-Invisibile");
  document.querySelector(".nav-bar").classList.remove("nav-bar-Invisibile");
  document
    .querySelector(".menu-toggle-media")
    .classList.remove("menu-toggle-media-Invisible");
}

const hamburgerButtonVisibile = document.querySelector(".menu-toggle-media");

hamburgerButtonVisibile.addEventListener("click", toggleMenuVisibile);

/********************************************************************************************/

function toggleMenuInvisibile(event) {
  const hamburger = event.currentTarget;

  // Aggiunge le classi per nascondere gli elementi
  document.querySelector(".menu-toggle").classList.add("menu-toggle-Invisible");
  document.querySelector(".logIn").classList.add("logIn-Invisibile");
  document.querySelector(".nav-bar").classList.add("nav-bar-Invisibile");
  document
    .querySelector(".menu-toggle-media")
    .classList.add("menu-toggle-media-Invisible");

  // Rimuove le classi "Visibile"
  document
    .querySelector(".menu-toggle")
    .classList.remove("menu-toggle-Visibile");
  document.querySelector(".logIn").classList.remove("logIn-Visibile");
  document.querySelector(".nav-bar").classList.remove("nav-bar-Visibile");
  document
    .querySelector(".menu-toggle-media")
    .classList.remove("menu-toggle-media-Visibile");
}

const hamburgerButtonInvisibile = document.querySelector(".menu-toggle");

hamburgerButtonInvisibile.addEventListener("click", toggleMenuInvisibile);

/********************************************************************************************/

function onSeeMoreClick() {
  const section = document.querySelector("#container-more-reviews");
  const button = document.querySelector(".btn");

  const isVisible = section.style.display === "flex";

  if (isVisible) {
    section.style.display = "none";
    button.textContent = "SEE MORE";
  } else {
    section.style.display = "flex";
    button.textContent = "SEE LESS";
  }
}
