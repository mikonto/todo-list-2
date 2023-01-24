import Project from "./project";
import Task from "./task";

export default class UI {
  static loadHomepage() {
    UI.initMenuBtn();
    UI.displayTasks(Project.index);
    UI.displayProjects();
  }

  static initMenuBtn() {
    const menuBtn = document.getElementsByClassName("fa-bars")[0];
    menuBtn.addEventListener("click", UI.toggleNav);
  }

  static toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }

  static displayTasks(project) {
    const main = document.getElementById("main");
    main.textContent = "";
    Task.instances.forEach((object) => {
      if (object.project === project) {
        Object.entries(object).forEach(([key, value]) => {
          main.innerHTML += `${key}: ${value} <br>`;
        });
      }
    });
  }

  static displayProjects() {
    const projectsList = document.getElementsByClassName("projects-list")[0];
    Project.instances.forEach((object) => {
      if (object !== Project.index) {
        Object.entries(object).forEach(() => {
          const button = document.createElement("button");
          button.innerText = `${object.name}`;
          projectsList.appendChild(button);

          button.addEventListener("click", () => {
            UI.displayTasks(object);
          });
        });
      }
    });
  }
}
