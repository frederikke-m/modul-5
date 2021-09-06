// const btnHamburger = document.querySelector("#btnHamburger");
// const overlay = document.querySelector(".overlay")
// const overlayContent = document.querySelector(".overlay-content")
// const menuLinks = document.querySelectorAll("a");

// btnHamburger.addEventListener("click", function () {
//   if (overlay.classList.contains("show")) {
//     /* Luk hamburger menu
//     ============================*/
//     overlay.classList.remove("show");
//     overlay.classList.add("hidden");
//     overlayContent.classList.remove("show");
//     overlayContent.classList.add("hidden");
//   } else {
//     /* Åben hamburger menu
//     ============================*/
//     overlay.classList.remove("hidden");
//     overlay.classList.add("show");
//     overlayContent.classList.remove("hidden");
//     overlayContent.classList.add("show");
//   }
// });

const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const headerMenu = document.querySelector(".header__menu");
const languageElem = document.querySelector(".header__language");
const header = document.querySelector("header");
const home = document.querySelector(".home");
const whoIAm = document.querySelector(".whoiam");
const whatIDo = document.querySelector(".whatido");
const myVision = document.querySelector(".myvision");
const contact = document.querySelector(".contact");

btnHamburger.addEventListener("click", hamburgerMenu);
home.addEventListener("click", hamburgerMenu);
whoIAm.addEventListener("click", hamburgerMenu);
whatIDo.addEventListener("click", hamburgerMenu);
myVision.addEventListener("click", hamburgerMenu);
contact.addEventListener("click", hamburgerMenu);

function hamburgerMenu () {
  if (header.classList.contains("open")) {
    /* Luk hamburger menu
    ============================*/
    header.classList.remove("open");
    body.style.overflow = "auto";
    headerMenu.style.height = null;
  } else {
    /* Åben hamburger menu
    ============================*/
    header.classList.add("open");
    body.style.overflow = "hidden";
    headerMenu.style.height = `100vh`;
  }
}






//Smooth scroll

const arrowHero = document.querySelector(".arrowhero")

let scrollY = 0;
let distance = 10;
let speed = 0.4;

function autoScrollTo(el) {
  let currentY = window.pageYOffset;
  let targetY = document.getElementById(el);
  let bodyHeight = document.body.offsetHeight;
  let yPos = currentY + window.innerHeight;
  let animator = setTimeout('autoScrollTo(\'' + el + '\')', speed);

  if (yPos > bodyHeight) {
    clearTimeout(animator);
  }

  else {
    if (currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    }

    else {
      clearTimeout(animator);
    }
  }
}

arrowHero.addEventListener("click", autoScrollTo)


