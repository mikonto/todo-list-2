export default class UI {
  static loadHomepage() {
    UI.initButtons();
  }

  static toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }

  static initButtons() {
    const menuBtn = document.getElementsByClassName("fa-bars")[0];
    menuBtn.addEventListener("click", UI.toggleNav);
  }
}
