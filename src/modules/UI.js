import TodoList from "./todoList";
import Todo from "./todo";

export default class UI {
  static loadHomepage() {
    UI.initMenuBtn();
    UI.initDefaultTodoList();
    UI.initTodoList();
  }

  static initMenuBtn() {
    const menuBtn = document.getElementsByClassName("fa-bars")[0];
    menuBtn.addEventListener("click", UI.toggleNav);
  }

  static toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }

  static initDefaultTodoList() {
    const index = document.getElementById("inbox");
    index.addEventListener("click", () => {
      UI.updateTasks(TodoList.instances[0].id);
    });
  }

  static initTodoList() {
    const todoListElem = document.getElementById("todo-lists");
    todoListElem.textContent = "";

    for (let i = 1; i < TodoList.instances.length; i += 1) {
      const button = document.createElement("button");
      button.innerText = `${TodoList.instances[i].name}`;
      todoListElem.appendChild(button);
      button.addEventListener("click", () => {
        UI.updateTasks(TodoList.instances[i].id);
      });
    }
  }

  static updateTasks(todoListId) {
    const main = document.getElementById("main");
    main.textContent = "";
    for (let i = 0; i < Todo.instances.length; i++) {
      if (Todo.instances[i].todoListId === todoListId) {
        const mainElem = document.getElementById("main");
        let innerHTML = "";
        const keys = Object.keys(Todo.instances[i]);
        for (let j = 0; j < keys.length; j++) {
          innerHTML += `${keys[j]}: ${Todo.instances[i][keys[j]]}<br>`;
        }
        mainElem.innerHTML = innerHTML;
      }
    }
  }
}
