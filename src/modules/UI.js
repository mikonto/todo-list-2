import Project from "./project";
import Task from "./task";

export default class UI {
  static loadHomepage() {
    UI.initMenuBtn();
    UI.loadIndex();
  }

  static initMenuBtn() {
    const menuBtn = document.getElementsByClassName("fa-bars")[0];
    menuBtn.addEventListener("click", UI.toggleNav);
  }

  static toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }

  static loadIndex() {
    const main = document.getElementById("main");
    Task.instances.forEach((object) => {
      if (object.project === "index") {
        Object.entries(object).forEach(([key, value]) => {
          main.innerHTML += `${key}: ${value} <br>`;
        });
      }
    });
  }
}
