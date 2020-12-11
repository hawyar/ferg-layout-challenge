import './sass/styles.scss';





function main() {

  let navToggle = document.querySelector("#nav-toggle")

  let navMenu = document.querySelector("#nav-menu")


  navToggle.addEventListener("click", (e) => {
    navMenu.classList.toggle("is-active")
    navToggle.classList.toggle("is-active")
  })
}
document.addEventListener('DOMContentLoaded', main());
