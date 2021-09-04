const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector(".overlay")
const overlayContent = document.querySelector(".overlay-content")

btnHamburger.addEventListener("click", function () {
  if (overlay.classList.contains("show")) {
    /* Luk hamburger menu
    ============================*/
    overlay.classList.remove("show");
    overlay.classList.add("hidden");
    overlayContent.classList.remove("show");
    overlayContent.classList.add("hidden");
  } else {
    /* Åben hamburger menu
    ============================*/
    overlay.classList.remove("hidden");
    overlay.classList.add("show");
    overlayContent.classList.remove("hidden");
    overlayContent.classList.add("show");
  }
});


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


