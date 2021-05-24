const hamburguerMenu = document.querySelector(".hamburguer-menu");
const ham = document.querySelector(".nav-hamburguer-container");
const hamIcon = document.querySelector(".nav-hamburguer");
const closeHam = document.querySelector(".nav-hamburguer-close");
const menuItems = document.querySelector(".menu-list-item-ham");

hamIcon.addEventListener("click", showMenu);
closeHam.addEventListener("click", hideMenu);

function showMenu() {
  if (hamburguerMenu.classList.contains("hideOn")) {
    hamburguerMenu.classList.replace("hideOn", "hideOff");
    closeHam.style.display = "block";
    hamIcon.style.display = "none";
  }
}

function hideMenu(event) {
  // console.log(JSON.stringify(event.target.innerText)); next step

  if (hamburguerMenu.classList.contains("hideOff")) {
    hamburguerMenu.classList.replace("hideOff", "hideOn");
    closeHam.style.display = "none";
    hamIcon.style.display = "block";
  }
}
