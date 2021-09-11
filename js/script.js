const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const headerMenu = document.querySelector(".header__menu");
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

// Active class på links
const navlinks = document.querySelectorAll(".header__links");
console.log(navlinks)
const sections = Array.from(document.querySelectorAll("section"));

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

  navlinks.forEach((link) => link.classList.remove("active"));
  navlinks[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);




//Smooth scroll – virker ikke? :(

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


