import TodoList from "./todoList";
import Todo from "./todo";

export default class UI {
  static loadHomepage() {
    UI.initButtons();
    UI.displayTodos("todoListId", TodoList.instances[0].id);
  }

  static initButtons() {
    UI.initMenuButton();
    UI.initNavButtonsAll();
    UI.initDefaultTodoListButtons();
    UI.initTodoListButtons();
    UI.initAddTodoListButton();
    UI.initTodoListModal();
    UI.initTodoModal();
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
      UI.displayTodos("todoListId", TodoList.instances[0].id);
    });
  }

  static initTodoListButtons() {
    const todoListElement = document.getElementById("todo-lists");
    todoListElement.textContent = "";
    for (let i = 1; i < TodoList.instances.length; i += 1) {
      const navButton = document.createElement("button");
      navButton.classList.add("nav-button");

      const todoListName = document.createElement("button");
      todoListName.innerText = `${TodoList.instances[i].name}`;
      todoListName.classList.add("todo-list-name");
      navButton.appendChild(todoListName);
      todoListName.addEventListener("click", () => {
        UI.displayTodos("todoListId", TodoList.instances[i].id);
      });

      const todoListDelete = document.createElement("button");
      todoListDelete.innerHTML = '<i class="fa fa-times"></i>';
      todoListDelete.classList.add("todo-list-delete");
      navButton.appendChild(todoListDelete);
      todoListDelete.addEventListener("click", () => {
        TodoList.remove(TodoList.instances[i].id);
        UI.initTodoListButtons();
      });
      todoListElement.appendChild(navButton);
    }
  }

  static initAddTodoListButton() {
    const addTodoButton = document.getElementById("button-add-todo-list");
    addTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo-list");
      nav.classList.toggle("active");
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
      UI.makeLastTodoListActive();
    }
  }

  static makeLastTodoListActive() {
    document.querySelectorAll(".nav-button").forEach((element) => {
      element.classList.remove("active");
    });

    const lastChild = document.querySelector("#todo-lists").lastElementChild;
    lastChild.classList.add("active");
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
    const mainSection = document.getElementById("main");
    mainSection.innerHTML = "";
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
      innerHTML = "No todos";
    }
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = innerHTML;
    todoDiv.setAttribute("id", "todo");

    todoDiv.dataset.todoKey = todoKey;
    todoDiv.dataset.todoValue = todoValue;

    mainSection.appendChild(todoDiv);

    const addTodoButton = document.createElement("button");
    const addTodoButtonText = document.createTextNode("Add todo");
    const addTodoButtonIcon = document.createElement("i");
    addTodoButtonIcon.classList.add("fas", "fa-plus");
    addTodoButton.appendChild(addTodoButtonIcon);
    addTodoButton.appendChild(addTodoButtonText);
    addTodoButton.setAttribute("id", "add-todo-button");
    mainSection.appendChild(addTodoButton);
    UI.initAddTodoButton();
  }

  static initAddTodoButton() {
    const addTodoButton = document.getElementById("add-todo-button");
    addTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo");
      nav.classList.toggle("active");
    });
  }

  static initTodoModal() {
    UI.initAddTodoModal();
    UI.initCancelTodoModal();
  }

  static initAddTodoModal() {
    const addTodoButton = document.getElementById("modal-todo-add");
    addTodoButton.addEventListener("click", UI.handleAddTodo);
  }

  static handleAddTodo() {
    const todoElement = document.querySelector("#todo");
    const dataTodoKey = todoElement.getAttribute("data-todo-key");
    const dataTodoValue = todoElement.getAttribute("data-todo-value");
    Todo.add(
      dataTodoValue,
      "name",
      "title",
      "description",
      "due date",
      "priority",
      false
    );
    const addTodoModal = document.getElementById("modal-todo");
    addTodoModal.classList.toggle("active");
    todoElement.value = "";
    UI.displayTodos(dataTodoKey, dataTodoValue);
  }

  static initCancelTodoModal() {
    const cancelTodoButton = document.getElementById("modal-todo-cancel");

    cancelTodoButton.addEventListener("click", (event) => {
      const nav = document.getElementById("modal-todo");
      nav.classList.toggle("active");
      document.getElementById("todo-name-input").value = "";
    });
  }
}
