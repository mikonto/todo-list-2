import TodoList from "./todoList";
import Todo from "./todo";

export default class UI {
  static loadHomepage() {
    UI.initButtons();
    UI.displayTodos("todoListId", 0);
  }

  static initButtons() {
    UI.initMenuButton();
    UI.initNavButtonsAll();
    UI.initDefaultTodoListButtons();
    UI.initTodoListButtons();
    UI.initAddTodoListButton();
    UI.initTodoListModal();
  }

  static initMenuButton() {
    const menuBtn = document.getElementsByClassName("fa-bars")[0];
    menuBtn.addEventListener("click", (event) => {
      const nav = document.getElementById("nav");
      nav.classList.toggle("active");
    });
  }

  static initNavButtonsAll() {
    document.addEventListener("click", (event) => {
      if (event.target.matches(".nav-button")) {
        const buttons = document.querySelectorAll(".nav-button");
        buttons.forEach((b) => b.classList.remove("active"));
        event.target.classList.add("active");
      }
    });
  }

  static initDefaultTodoListButtons() {
    const inbox = document.getElementById("inbox");
    inbox.addEventListener("click", () => {
      UI.displayTodos("todoListId", 0);
    });
  }

  static initTodoListButtons() {
    const todoListElem = document.getElementById("todo-lists");
    todoListElem.textContent = "";

    for (let i = 1; i < TodoList.instances.length; i += 1) {
      const container = document.createElement("div");
      container.classList.add("todo-list-container");

      const button = document.createElement("button");
      button.innerText = `${TodoList.instances[i].name}`;
      button.classList.add("nav-button");
      container.appendChild(button);
      button.addEventListener("click", () => {
        UI.displayTodos("todoListId", TodoList.instances[i].id);
      });

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fa fa-times"></i>';
      deleteButton.classList.add("delete-button");
      container.appendChild(deleteButton);
      deleteButton.addEventListener("click", () => {
        TodoList.remove(TodoList.instances[i].id);
        console.log("remove");
        UI.initTodoListButtons();
      });
      todoListElem.appendChild(container);
    }
  }

  static initAddTodoListButton() {
    const addTodoButton = document.getElementById("button-add-todo-list");
    addTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo-list");
      nav.classList.toggle("active");
      console.log("works");
    });
  }

  static initTodoListModal() {
    UI.initAddTodoListModal();
    UI.initCancelTodoListModal();
  }

  static initAddTodoListModal() {
    const addTodoListButton = document.getElementById("modal-todo-list-add");
    addTodoListButton.addEventListener("click", UI.handleAddTodoList);
  }

  static handleAddTodoList() {
    const { value } = document.getElementById("todo-list-name-input");
    if (value !== "") {
      TodoList.add(value);
      const addTodoListModal = document.getElementById("modal-todo-list");
      addTodoListModal.classList.toggle("active");
      document.getElementById("todo-list-name-input").value = "";
      UI.initTodoListButtons();
    }
  }

  static initCancelTodoListModal() {
    const cancelTodoListButton = document.getElementById(
      "modal-todo-list-cancel"
    );
    cancelTodoListButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo-list");
      nav.classList.toggle("active");
      document.getElementById("todo-list-name-input").value = "";
    });
  }

  static displayTodos(todoKey, todoValue) {
    const mainElem = document.getElementById("main");
    let innerHTML = "";
    for (let i = 0; i < Todo.instances.length; i += 1) {
      if (Todo.instances[i][todoKey] === todoValue) {
        const keys = Object.keys(Todo.instances[i]);
        for (let j = 0; j < keys.length; j += 1) {
          innerHTML += `${keys[j]}: ${Todo.instances[i][keys[j]]}<br>`;
        }
        innerHTML += `<br>`;
      }
    }
    if (innerHTML === "") {
      innerHTML = "empty";
    }
    mainElem.innerHTML = innerHTML;
  }
}
