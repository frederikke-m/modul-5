const btnHamburger = document.querySelector("#btnHamburger");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

btnHamburger.addEventListener("click", myFunction)