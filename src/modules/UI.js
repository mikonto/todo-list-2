import Project from "./project";
import Task from "./task";

export default class UI {
  static loadHomepage() {
    UI.initMenuBtn();
    UI.updateDefaultProjectList();
    UI.updateProjectsList();
    UI.updateTasks(Project.index);
  }

  static initMenuBtn() {
    const menuBtn = document.getElementsByClassName("fa-bars")[0];
    menuBtn.addEventListener("click", UI.toggleNav);
  }

  static toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }

  static updateDefaultProjectList() {
    const index = document.getElementById("index");

    index.addEventListener("click", () => {
      UI.updateTasks(Project.index);
    });
  }

  static updateProjectsList() {
    const projectsList = document.getElementById("projects-list");
    Project.instances.forEach((object) => {
      if (object !== Project.index) {
        Object.entries(object).forEach(() => {
          const button = document.createElement("button");
          button.innerText = `${object.name}`;
          projectsList.appendChild(button);

          button.addEventListener("click", () => {
            UI.updateTasks(object);
          });
        });
      }
    });
  }

  static updateTasks(project) {
    const main = document.getElementById("main");
    main.textContent = "";
    Task.instances.forEach((object) => {
      if (object.project === project && object.finished === false) {
        Object.entries(object).forEach(([key, value]) => {
          main.innerHTML += `${key}: ${value} <br>`;
        });
      }
    });
  }
}
