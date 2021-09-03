// const btnHamburger = document.querySelector("#btnHamburger");

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// btnHamburger.addEventListener("click", myFunction)

const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector(".overlay")
const overlayContent = document.querySelector(".overlay-content")
const btnClose = document.querySelector("#btnClose")

function openNav() {
  document.getElementById("myNav").style.height = "100%";

  if (overlay.classList.contains("show")) {
    overlay.classList.remove("show")
    overlayContent.classList.remove("show")
    overlay.classList.add("hidden")
    overlayContent.classList.add("hidden")
  } else {
    overlay.classList.remove("hidden")
    overlayContent.classList.remove("hidden")
    overlay.classList.add("show")
    overlayContent.classList.add("show")
  }
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

btnHamburger.addEventListener("click", openNav)
btnHamburger.addEventListener("click", closeNav)


